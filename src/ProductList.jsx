import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const plants = [
  // Air Purifying Plants
  {
    id: 1,
    category: 'Air Purifying Plants',
    name: 'Snake Plant',
    price: 18.99,
    image:
      'https://images.unsplash.com/photo-1593482892290-f54927ae2e8c?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    category: 'Air Purifying Plants',
    name: 'Peace Lily',
    price: 22.99,
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    category: 'Air Purifying Plants',
    name: 'Spider Plant',
    price: 16.99,
    image:
      'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    category: 'Air Purifying Plants',
    name: 'ZZ Plant',
    price: 24.99,
    image:
      'https://images.unsplash.com/photo-1632207691143-643e2f3f4c6a?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    category: 'Air Purifying Plants',
    name: 'Boston Fern',
    price: 19.99,
    image:
      'https://images.unsplash.com/photo-1596724878582-76f3d5a9e6c6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    category: 'Air Purifying Plants',
    name: 'Rubber Plant',
    price: 27.99,
    image:
      'https://images.unsplash.com/photo-1596547609652-9cf5d8e4f6c2?auto=format&fit=crop&w=500&q=80',
  },

  // Aromatic Plants
  {
    id: 7,
    category: 'Aromatic Plants',
    name: 'Lavender',
    price: 15.99,
    image:
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    category: 'Aromatic Plants',
    name: 'Rosemary',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    category: 'Aromatic Plants',
    name: 'Mint Plant',
    price: 12.99,
    image:
      'https://images.unsplash.com/photo-1628556270448-4d4e4148e1f7?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 10,
    category: 'Aromatic Plants',
    name: 'Basil Plant',
    price: 13.99,
    image:
      'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 11,
    category: 'Aromatic Plants',
    name: 'Lemon Balm',
    price: 17.99,
    image:
      'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 12,
    category: 'Aromatic Plants',
    name: 'Thyme Plant',
    price: 11.99,
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=500&q=80',
  },

  // Decorative Plants
  {
    id: 13,
    category: 'Decorative Plants',
    name: 'Monstera',
    price: 29.99,
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 14,
    category: 'Decorative Plants',
    name: 'Calathea',
    price: 26.99,
    image:
      'https://images.unsplash.com/photo-1603436326446-3e0c2d9b1e99?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 15,
    category: 'Decorative Plants',
    name: 'Fiddle Leaf Fig',
    price: 34.99,
    image:
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 16,
    category: 'Decorative Plants',
    name: 'Areca Palm',
    price: 31.99,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 17,
    category: 'Decorative Plants',
    name: 'Caladium',
    price: 23.99,
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 18,
    category: 'Decorative Plants',
    name: 'Chinese Money Plant',
    price: 21.99,
    image:
      'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80',
  },
];

function ProductList({ onHomeClick, onCartClick }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  // Calculate total number of plants in the cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = plant => {
    dispatch(addItem(plant));
  };

  const isInCart = plantId => {
    return cartItems.some(item => item.id === plantId);
  };

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="product-navbar">
        <div className="navbar-brand">
          Paradise Nursery
        </div>

        <div className="navbar-links">
          <button onClick={onHomeClick}>
            Home
          </button>

          <a href="#plants">
            Plants
          </a>

          <button onClick={onCartClick}>
  🛒 Cart ({cartCount})
</button>
        </div>
      </nav>

      {/* Page Heading */}
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>
          Explore our collection of beautiful houseplants
        </p>
      </header>

      {/* Plant Categories */}
      <main id="plants" className="plants-container">

        {categories.map(category => (
          <section
            key={category}
            className="plant-category"
          >
            <h2>{category}</h2>

            <div className="plants-grid">

              {plants
                .filter(plant => plant.category === category)
                .map(plant => (
                  <div
                    className="plant-card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="plant-info">
                      <h3>{plant.name}</h3>

                      <p className="plant-price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        className="add-to-cart-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                      >
                        {isInCart(plant.id)
                          ? 'Added to Cart'
                          : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}

            </div>
          </section>
        ))}

      </main>

      {/* Cart Summary */}
      <div id="cart" className="cart-summary">
        <h2>Shopping Cart</h2>
        <p>
          You currently have{' '}
          <strong>{cartCount}</strong>{' '}
          {cartCount === 1 ? 'plant' : 'plants'} in your cart.
        </p>
      </div>

    </div>
  );
}

export default ProductList;