// src/components/OurFeaturedItems.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../Context/ProductContext';
import styles from '../OurFeaturedItems/OurFeaturedItems.module.css';

const OurFeaturedItems = () => {
  const { getFeaturedProducts } = useProduct();
  const featuredItems = getFeaturedProducts();
  const navigate = useNavigate(); // 🔹 نستخدمها للتنقل بين الصفحات

  // 🔹 دالة لفتح صفحة تفاصيل المنتج
  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  // 🔹 دالة لفتح صفحة كل المنتجات
  const handleSeeAllProducts = () => {
    navigate('/all-products');
  };

  return (
    <section className={styles.ourFeaturedItems}>
      <h2 className={styles.sectionTitle}>Our Featured Items</h2>
      <div className={styles.itemsGrid}>
        {featuredItems.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            {item.onSale && <span className={styles.saleBadge}>Sale</span>}
            <div className={styles.itemImageContainer}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
            </div>
            <h3 className={styles.itemName}>{item.name}</h3>

            {item.onSale ? (
              <p className={styles.itemPrice}>
                <span className={styles.oldPrice}>From ${item.oldPrice.toFixed(2)}</span>
                <span className={styles.currentPrice}>${item.price.toFixed(2)}</span>
              </p>
            ) : (
              <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
            )}

            {/* 🔹 زر عرض تفاصيل المنتج */}
            <button
              className={styles.viewProductButton}
              onClick={() => handleViewProduct(item.id)}
            >
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 زر عرض جميع المنتجات */}
      <button
        className={styles.seeAllProductsButton}
        onClick={handleSeeAllProducts}
      >
        See All Products
      </button>
    </section>
  );
};

export default OurFeaturedItems;
