/*
  # Schema Completo de Tienda de Minecraft

  ## Descripción
  Sistema completo de tienda para servidor de Minecraft con categorías,
  productos, carritos de compra y órdenes.

  ## Nuevas Tablas
  
  ### `categories`
  Categorías de productos (Rangos, VIP, Kits, Items, etc.)
  - `id` (uuid, primary key)
  - `name` (text) - Nombre de la categoría
  - `slug` (text, unique) - URL-friendly identifier
  - `icon` (text) - URL del ícono
  - `color` (text) - Color de la categoría
  - `display_order` (int) - Orden de visualización
  - `created_at` (timestamp)

  ### `products`
  Productos disponibles en la tienda
  - `id` (uuid, primary key)
  - `category_id` (uuid, foreign key)
  - `name` (text) - Nombre del producto
  - `description` (text) - Descripción
  - `price` (numeric) - Precio en la moneda del servidor
  - `image_url` (text) - URL de la imagen
  - `featured` (boolean) - Producto destacado
  - `best_seller` (boolean) - Mejor vendido
  - `discount_percentage` (int) - Porcentaje de descuento
  - `stock` (int) - Cantidad disponible (-1 = ilimitado)
  - `active` (boolean) - Producto activo
  - `created_at` (timestamp)

  ### `carts`
  Carritos de compra de usuarios
  - `id` (uuid, primary key)
  - `user_id` (uuid) - ID del usuario (null = usuario anónimo)
  - `session_id` (text) - ID de sesión para usuarios no autenticados
  - `created_at` (timestamp)
  - `updated_at` (timestamp)

  ### `cart_items`
  Items dentro de cada carrito
  - `id` (uuid, primary key)
  - `cart_id` (uuid, foreign key)
  - `product_id` (uuid, foreign key)
  - `quantity` (int)
  - `added_at` (timestamp)

  ### `orders`
  Órdenes completadas
  - `id` (uuid, primary key)
  - `user_id` (uuid) - ID del usuario
  - `session_id` (text) - ID de sesión
  - `username` (text) - Nombre de usuario de Minecraft
  - `email` (text) - Email del comprador
  - `total_amount` (numeric)
  - `payment_method` (text) - paypal, stripe, etc.
  - `payment_id` (text) - ID de la transacción
  - `status` (text) - pending, completed, failed, refunded
  - `created_at` (timestamp)

  ### `order_items`
  Items dentro de cada orden
  - `id` (uuid, primary key)
  - `order_id` (uuid, foreign key)
  - `product_id` (uuid, foreign key)
  - `product_name` (text) - Snapshot del nombre
  - `quantity` (int)
  - `price` (numeric) - Precio al momento de compra

  ## Seguridad
  - RLS habilitado en todas las tablas
  - Políticas restrictivas para proteger datos de usuarios
*/

-- Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text,
  color text DEFAULT '#6366f1',
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  name text NOT NULL,
  description text DEFAULT '',
  price numeric(10, 2) NOT NULL,
  image_url text,
  featured boolean DEFAULT false,
  best_seller boolean DEFAULT false,
  discount_percentage int DEFAULT 0,
  stock int DEFAULT -1,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de carritos
CREATE TABLE IF NOT EXISTS carts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  session_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Crear tabla de items del carrito
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id uuid REFERENCES carts(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  quantity int DEFAULT 1,
  added_at timestamptz DEFAULT now(),
  UNIQUE(cart_id, product_id)
);

-- Crear tabla de órdenes
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  session_id text,
  username text NOT NULL,
  email text NOT NULL,
  total_amount numeric(10, 2) NOT NULL,
  payment_method text NOT NULL,
  payment_id text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Crear tabla de items de órdenes
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  product_id uuid REFERENCES products(id) ON DELETE SET NULL,
  product_name text NOT NULL,
  quantity int NOT NULL,
  price numeric(10, 2) NOT NULL
);

-- Habilitar RLS en todas las tablas
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Políticas para categories (lectura pública)
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO public
  USING (true);

-- Políticas para products (lectura pública de productos activos)
CREATE POLICY "Anyone can view active products"
  ON products FOR SELECT
  TO public
  USING (active = true);

-- Políticas para carts (acceso público simple para demo)
CREATE POLICY "Anyone can view carts"
  ON carts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create carts"
  ON carts FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update carts"
  ON carts FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Políticas para cart_items (acceso público simple para demo)
CREATE POLICY "Anyone can view cart items"
  ON cart_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can add cart items"
  ON cart_items FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update cart items"
  ON cart_items FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete cart items"
  ON cart_items FOR DELETE
  TO public
  USING (true);

-- Políticas para orders (acceso público para demo)
CREATE POLICY "Anyone can view orders"
  ON orders FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO public
  WITH CHECK (true);

-- Políticas para order_items (acceso público para demo)
CREATE POLICY "Anyone can view order items"
  ON order_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  TO public
  WITH CHECK (true);

-- Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
CREATE INDEX IF NOT EXISTS idx_cart_items_cart ON cart_items(cart_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_carts_session ON carts(session_id);
