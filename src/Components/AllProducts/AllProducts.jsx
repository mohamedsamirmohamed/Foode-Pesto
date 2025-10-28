import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../Context/ProductContext';
import styles from './AllProducts.module.css';
import Burger from '../image/Burgers/08e757c5568b2b51560890e0f96f52534a2ba258_2000x2000.webp';
import Chicken from '../image/Chickens/OIP (2).webp';
import BBQ from '../image/BBQ/20230112-Demand-in-Seafood-Fishery.jpg';
import Fish from '../image/Fish/OIP (1).webp';
import Pizza from '../image/Pizzas/46e81d_aee2085ef528445eb26acbec54cd3021~mv2.avif';
import Drink from '../image/Drinks/Fresh Orange Juice.jpeg';

const AllProducts = () => {
  const { products, addToCart } = useProduct();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Best selling');
  const itemsPerPage = 12;

  const categories = ['All', 'Burgers', 'Chickens', 'BBQ', 'Fish', 'Pizzas', 'Drinks'];

  const categoryImages = {
    Burgers: Burger,
    Chickens: Chicken,
    BBQ: BBQ,
    Fish: Fish,
    Pizzas: Pizza,
    Drinks: Drink
  };

  let filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'Price: Low to High') return a.price - b.price;
    if (sortOption === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('تم إضافة المنتج للسلة');
  };

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <div className={styles.categoryNav}>
        <h1 className={styles.mainTitle}>Our Selections</h1>
      </div>

      {/* Category Tabs */}
      <div className={styles.categoryTabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryTab} ${
              selectedCategory === category ? styles.active : ''
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category !== 'All' && (
              <img
                src={categoryImages[category]}
                alt={category}
                className={styles.categoryImage}
              />
            )}
            <span className={styles.tabLabel}>{category}</span>
            <span className={styles.tabCount}>
              (
              {products.filter((p) =>
                category === 'All' ? true : p.category === category
              ).length}{' '}
              items)
            </span>
          </button>
        ))}
      </div>

      {/* Product Section */}
      <div className={styles.productsHeader}>
        <span>{filteredProducts.length} products</span>
        <div className={styles.sortSection}>
          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Best selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <div className={styles.circularImage}>
                <img src={product.image} alt={product.name} />
              </div>
              {product.onSale && <span className={styles.saleBadge}>Sale</span>}
            </div>

            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price}</span>
                {product.originalPrice && (
                  <span className={styles.originalPrice}>${product.originalPrice}</span>
                )}
              </div>

              <div className={styles.buttonGroup}>
                {product.onSale ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={styles.addToCartBtn}
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className={styles.viewProductBtn}
                  >
                    View Product
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`${styles.pageButton} ${
                currentPage === i + 1 ? styles.activePage : ''
              }`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={styles.nextButton}
            >
              Next »
            </button>
          )}
        </div>
      )}

      <div className={styles.subscribeSection}>
        <h2>Subscribe and Get 10% Discount</h2>
        <p>Be the first to get the latest news, promotions and much more.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </form>
        <small>Contact us if you need to know anything</small>
      </div>
    </div>
  );
};

export default AllProducts;