import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FaArrowUp } from 'react-icons/fa';
import styles from './Layout.module.css'; // هننشئ ملف CSS

export default function Layout() {
  const [showArrow, setShowArrow] = useState(false);

  // لما المستخدم ينزل لتحت شوية، يظهر السهم
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // وظيفة السهم لما ندوس عليه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* السهم */}
      {showArrow && (
        <button onClick={scrollToTop} className={styles.scrollButton}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
