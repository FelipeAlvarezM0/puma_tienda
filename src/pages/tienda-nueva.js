import { supabase } from '../lib/supabase.js';
import { addToCart, getCartItems, calculateCartTotal } from '../lib/cart.js';

let categories = [];
let products = [];
let filteredProducts = [];
let selectedCategory = 'all';
let cartItems = [];
let isCartOpen = false;
let searchQuery = '';

export async function initTienda() {
  await loadCategories();
  await loadProducts();
  await loadCartItems();
  render();
  setupEventListeners();
}

async function loadCategories() {
  const { data } = await supabase
    .from('categories')
    .select('*')
    .order('display_order');

  categories = data || [];
}

async function loadProducts() {
  const { data } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name, slug, color)
    `)
    .eq('active', true)
    .order('created_at', { ascending: false });

  products = data || [];
  filterProducts();
}

async function loadCartItems() {
  cartItems = await getCartItems();
}

function filterProducts() {
  filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category?.slug === selectedCategory;
    const matchesSearch = !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = renderTienda();
}

function renderTienda() {
  return `
    <div class="store-container">
      ${renderHeader()}
      <div class="store-content">
        ${renderSidebar()}
        <div class="store-main">
          ${renderWelcome()}
          ${renderProductGrid()}
        </div>
      </div>
      ${isCartOpen ? renderCartModal() : ''}
    </div>
  `;
}

function renderHeader() {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = calculateCartTotal(cartItems);

  return `
    <header class="store-header">
      <div class="store-header-left">
        <img src="/assets/images/logopl.png" alt="Logo" class="store-logo">
        <h1>TIENDA</h1>
      </div>

      <div class="store-header-center">
        <div class="search-bar">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Buscar productos..."
            value="${searchQuery}"
            class="search-input"
            id="searchInput"
          >
        </div>
      </div>

      <div class="store-header-right">
        <button class="cart-button" id="cartButton">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          ${cartCount > 0 ? `<span class="cart-badge">${cartCount}</span>` : ''}
          <span class="cart-total">$${cartTotal.toFixed(2)}</span>
        </button>
      </div>
    </header>
  `;
}

function renderSidebar() {
  return `
    <aside class="store-sidebar">
      <div class="sidebar-section">
        <h3 class="sidebar-title">
          <span class="sidebar-dot"></span>
          CATEGORÍAS
        </h3>
        <div class="category-list">
          <button
            class="category-item ${selectedCategory === 'all' ? 'active' : ''}"
            data-category="all"
          >
            <span class="category-icon">🛒</span>
            <span class="category-name">Todos los productos</span>
          </button>
          ${categories.map(cat => `
            <button
              class="category-item ${selectedCategory === cat.slug ? 'active' : ''}"
              data-category="${cat.slug}"
              style="--category-color: ${cat.color}"
            >
              <span class="category-icon">${cat.icon}</span>
              <span class="category-name">${cat.name}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <div class="sidebar-promo">
        <div class="promo-icon">🎁</div>
        <h4>Ofertas Especiales</h4>
        <p>¡Descuentos de hasta 25% en productos seleccionados!</p>
      </div>
    </aside>
  `;
}

function renderWelcome() {
  return `
    <div class="store-welcome">
      <h2>Bienvenido a la Tienda</h2>
      <p>Explora nuestra selección de productos premium para mejorar tu experiencia de juego</p>
    </div>
  `;
}

function renderProductGrid() {
  if (filteredProducts.length === 0) {
    return `
      <div class="no-products">
        <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
        <h3>No se encontraron productos</h3>
        <p>Intenta cambiar los filtros o la búsqueda</p>
      </div>
    `;
  }

  return `
    <div class="product-grid-modern">
      ${filteredProducts.map(product => renderProductCard(product)).join('')}
    </div>
  `;
}

function renderProductCard(product) {
  const hasDiscount = product.discount_percentage > 0;
  const finalPrice = product.price * (1 - (product.discount_percentage || 0) / 100);

  return `
    <div class="product-card-modern ${product.featured ? 'featured' : ''} ${product.best_seller ? 'best-seller' : ''}">
      ${product.best_seller ? '<div class="product-badge best">👑 MÁS VENDIDO</div>' : ''}
      ${hasDiscount ? `<div class="product-badge discount">-${product.discount_percentage}%</div>` : ''}

      <div class="product-image-wrapper">
        <img src="${product.image_url}" alt="${product.name}" class="product-image">
      </div>

      <div class="product-info">
        <div class="product-category" style="color: ${product.category?.color || '#6366f1'}">
          ${product.category?.name || 'Producto'}
        </div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description}</p>

        <div class="product-footer">
          <div class="product-pricing">
            ${hasDiscount ? `<span class="product-price-old">$${product.price.toFixed(2)}</span>` : ''}
            <span class="product-price">$${finalPrice.toFixed(2)}</span>
          </div>
          <button class="product-buy-btn" data-product-id="${product.id}">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Añadir
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCartModal() {
  const cartTotal = calculateCartTotal(cartItems);

  return `
    <div class="cart-modal-overlay" id="cartModal">
      <div class="cart-modal">
        <div class="cart-modal-header">
          <h2>Carrito de Compras</h2>
          <button class="cart-modal-close" id="closeCart">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="cart-modal-content">
          ${cartItems.length === 0 ? `
            <div class="cart-empty">
              <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <h3>Tu carrito está vacío</h3>
              <p>Añade productos para comenzar tu compra</p>
            </div>
          ` : `
            <div class="cart-items">
              ${cartItems.map(item => renderCartItem(item)).join('')}
            </div>

            <div class="cart-modal-footer">
              <div class="cart-total-row">
                <span>Total:</span>
                <span class="cart-total-amount">$${cartTotal.toFixed(2)}</span>
              </div>
              <button class="cart-checkout-btn">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Proceder al Pago
              </button>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

function renderCartItem(item) {
  const product = item.product;
  const hasDiscount = product.discount_percentage > 0;
  const finalPrice = product.price * (1 - (product.discount_percentage || 0) / 100);
  const itemTotal = finalPrice * item.quantity;

  return `
    <div class="cart-item">
      <img src="${product.image_url}" alt="${product.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${product.name}</h4>
        <p class="cart-item-price">$${finalPrice.toFixed(2)} ${hasDiscount ? `<span class="cart-item-discount">-${product.discount_percentage}%</span>` : ''}</p>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-btn" data-action="decrease" data-item-id="${item.id}">-</button>
        <span class="quantity-value">${item.quantity}</span>
        <button class="quantity-btn" data-action="increase" data-item-id="${item.id}">+</button>
      </div>
      <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
      <button class="cart-item-remove" data-item-id="${item.id}">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
      </button>
    </div>
  `;
}

function setupEventListeners() {
  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterProducts();
    render();
    setupEventListeners();
  });

  document.querySelectorAll('.category-item').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.category;
      filterProducts();
      render();
      setupEventListeners();
    });
  });

  document.querySelectorAll('.product-buy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const productId = btn.dataset.productId;
      await addToCart(productId);
      await loadCartItems();
      render();
      setupEventListeners();

      btn.textContent = '✓ Añadido';
      btn.style.background = '#22c55e';
      setTimeout(() => {
        render();
        setupEventListeners();
      }, 1000);
    });
  });

  document.getElementById('cartButton')?.addEventListener('click', () => {
    isCartOpen = true;
    render();
    setupEventListeners();
  });

  document.getElementById('closeCart')?.addEventListener('click', () => {
    isCartOpen = false;
    render();
    setupEventListeners();
  });

  document.getElementById('cartModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
      isCartOpen = false;
      render();
      setupEventListeners();
    }
  });

  document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const itemId = btn.dataset.itemId;
      const action = btn.dataset.action;
      const item = cartItems.find(i => i.id === itemId);

      if (item) {
        const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
        const { updateCartItemQuantity } = await import('../lib/cart.js');
        await updateCartItemQuantity(itemId, newQuantity);
        await loadCartItems();
        render();
        setupEventListeners();
      }
    });
  });

  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', async () => {
      const itemId = btn.dataset.itemId;
      const { removeFromCart } = await import('../lib/cart.js');
      await removeFromCart(itemId);
      await loadCartItems();
      render();
      setupEventListeners();
    });
  });
}
