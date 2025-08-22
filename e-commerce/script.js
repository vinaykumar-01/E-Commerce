const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Denim Blue Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Running Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1520975693385-c3f41e4c8f4a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Sports Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    name: "Black Sunglasses",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Cozy Hoodie",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1520975693385-c3f41e4c8f4a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Casual Backpack",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1528701800489-0fca5bfa64c1?auto=format&fit=crop&w=400&q=80"
  }
];

let cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.className = "product";
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productList.appendChild(productEl);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
  // Simple feedback
  alert(`${product.name} added to cart!`);
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const totalPrice = document.getElementById("total-price");

  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", renderProducts);
