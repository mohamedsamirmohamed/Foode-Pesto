// src/components/PestosFeatured.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 🔹 استيراد useNavigate
import { useProduct } from '../Context/ProductContext.js';
import styles from './PestosFeatured.module.css';

export default function PestosFeatured() {
  const { getFeaturedProducts } = useProduct();
  const allProducts = getFeaturedProducts();
  const burgers = allProducts.filter(p => p.category === 'Burgers');
  const bbq = allProducts.filter(p => p.category === 'BBQ');

  const navigate = useNavigate(); // 🔹 استدعاء الدالة

  // 🔹 دالة التوجيه لصفحة تفاصيل المنتج
  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Pesto's Featured Menu Board</h1>

        <div className={styles.menuGrid}>
          {/* Burgers Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Burgers</h2>
            <div className={styles.itemsList}>
              {burgers.map((product) => (
                <div
                  key={product.id}
                  className={styles.menuItem}
                  onClick={() => handleViewProduct(product.id)} // 👈 لما يدوس، يروح للصفحة
                  style={{ cursor: 'pointer' }} // 🔹 مؤشر الفأرة يشير أنه قابل للضغط
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{product.name}</h3>
                    <p className={styles.itemDesc}>{product.description}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BBQ Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>BBQ</h2>
            <div className={styles.itemsList}>
              {bbq.map((product) => (
                <div
                  key={product.id}
                  className={styles.menuItem}
                  onClick={() => handleViewProduct(product.id)} // 👈 نفس الفكرة هنا
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{product.name}</h3>
                    <p className={styles.itemDesc}>{product.description}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    <span className={styles.price}>${product.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
