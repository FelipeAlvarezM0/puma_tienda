import { supabase } from './supabase.js';

const CART_SESSION_KEY = 'cart_session_id';

export function getSessionId() {
  let sessionId = localStorage.getItem(CART_SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(CART_SESSION_KEY, sessionId);
  }
  return sessionId;
}

export async function getOrCreateCart() {
  const sessionId = getSessionId();

  const { data: existingCart } = await supabase
    .from('carts')
    .select('id')
    .eq('session_id', sessionId)
    .maybeSingle();

  if (existingCart) {
    return existingCart.id;
  }

  const { data: newCart, error } = await supabase
    .from('carts')
    .insert({ session_id: sessionId })
    .select('id')
    .single();

  if (error) {
    console.error('Error creating cart:', error);
    return null;
  }

  return newCart.id;
}

export async function addToCart(productId, quantity = 1) {
  const cartId = await getOrCreateCart();
  if (!cartId) return { error: 'Could not create cart' };

  const { data: existingItem } = await supabase
    .from('cart_items')
    .select('id, quantity')
    .eq('cart_id', cartId)
    .eq('product_id', productId)
    .maybeSingle();

  if (existingItem) {
    const { error } = await supabase
      .from('cart_items')
      .update({ quantity: existingItem.quantity + quantity })
      .eq('id', existingItem.id);

    return { error };
  }

  const { error } = await supabase
    .from('cart_items')
    .insert({
      cart_id: cartId,
      product_id: productId,
      quantity
    });

  return { error };
}

export async function getCartItems() {
  const cartId = await getOrCreateCart();
  if (!cartId) return [];

  const { data, error } = await supabase
    .from('cart_items')
    .select(`
      id,
      quantity,
      product:products(
        id,
        name,
        price,
        image_url,
        discount_percentage
      )
    `)
    .eq('cart_id', cartId);

  if (error) {
    console.error('Error fetching cart items:', error);
    return [];
  }

  return data || [];
}

export async function updateCartItemQuantity(itemId, quantity) {
  if (quantity <= 0) {
    return removeFromCart(itemId);
  }

  const { error } = await supabase
    .from('cart_items')
    .update({ quantity })
    .eq('id', itemId);

  return { error };
}

export async function removeFromCart(itemId) {
  const { error } = await supabase
    .from('cart_items')
    .delete()
    .eq('id', itemId);

  return { error };
}

export async function clearCart() {
  const cartId = await getOrCreateCart();
  if (!cartId) return;

  await supabase
    .from('cart_items')
    .delete()
    .eq('cart_id', cartId);
}

export function calculateCartTotal(items) {
  return items.reduce((total, item) => {
    const price = item.product.price;
    const discount = item.product.discount_percentage || 0;
    const finalPrice = price * (1 - discount / 100);
    return total + (finalPrice * item.quantity);
  }, 0);
}
