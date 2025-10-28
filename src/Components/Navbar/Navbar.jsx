// Navbar.jsx
import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { FaHeadphonesAlt } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '../Navbar/logo-3_1ea3a52d-3dca-497d-a266-efbad5616c21.webp';
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from '../Context/ProductContext';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const navigate = useNavigate();
    const { getCartItemsCount, searchTerm, setSearchTerm } = useProduct();

    const cartCount = getCartItemsCount();

    const toggleDesktopDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const toggleMobileDropdown = (menu) => {
        setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className={styles.navbarContainer}>
            {/* Top Bar */}
            <div className={styles.topBar}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Pesto Logo" />
                    </Link>
                </div>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className={styles.searchBtn}>
                        <FiSearch size={20} />
                    </button>
                </div>
                <div className={styles.topIcons}>
                    <button className={styles.userBtn}>
                        <FiUser size={22} />
                    </button>
                    <button className={styles.cartBtn} onClick={handleCartClick}>
                        <FiShoppingCart size={22} />
                        {cartCount > 0 && (
                            <span className={styles.cartBadge}>{cartCount}</span>
                        )}
                    </button>
                </div>
                {/* Hamburger Menu Icon for Mobile */}
                <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Bottom Navigation (Desktop Only) */}
            <div className={styles.navBar}>
                <div className={styles.navLeft}>
                    <Link to="/" className={styles.navLink}>Home</Link>

                    <div
                        className={styles.navItem}
                        onMouseEnter={() => toggleDesktopDropdown('pages')}
                        onMouseLeave={() => toggleDesktopDropdown(null)}
                    >
                        <button className={styles.navLink}>
                            Pages
                            <MdKeyboardArrowDown size={18} />
                        </button>
                        {activeDropdown === 'pages' && (
                            <div className={styles.dropdown}>
                                <Link to="/about">About Us</Link>
                                <Link to="/chefs">Pesto's Talented Chefs</Link>
                                <Link to="/testimonials">Testimonials</Link>
                                <Link to="/contact">Contact Us</Link>
                                <Link to="/faqs">Faq's</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className={styles.navItem}
                        onMouseEnter={() => toggleDesktopDropdown('shop')}
                        onMouseLeave={() => toggleDesktopDropdown(null)}
                    >
                        <button className={styles.navLink}>
                            Shop
                            <MdKeyboardArrowDown size={18} />
                        </button>
                        {activeDropdown === 'shop' && (
                            <div className={styles.dropdown}>
                                <Link to="/all-products">All Products</Link>
                                
                            </div>
                        )}
                    </div>

                    <div
                        className={styles.navItem}
                        onMouseEnter={() => toggleDesktopDropdown('blog')}
                        onMouseLeave={() => toggleDesktopDropdown(null)}
                    >
                        <button className={styles.navLink}>
                            Blog
                            <MdKeyboardArrowDown size={18} />
                        </button>
                        {activeDropdown === 'blog' && (
                            <div className={styles.dropdown}>
                                <a href="#">Latest Posts</a>
                                <a href="#">Recipes</a>
                                <a href="#">Tips</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.hotline}>
                    <div className={styles.hotlineIcon}>
                        <FaHeadphonesAlt size={24} />
                    </div>
                    <div className={styles.hotlineInfo}>
                        <div className={styles.hotlineLabel}>Hotline Order</div>
                        <div className={styles.hotlineNumber}>+01245789300</div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.open : ''}`} onClick={() => setIsMenuOpen(false)}></div>

            {/* Mobile Menu Sidebar */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <span className={styles.mobileMenuTitle}>Menu</span>
                    <button className={styles.closeMenuBtn} onClick={() => setIsMenuOpen(false)}>
                        <FiX size={24} />
                    </button>
                </div>
                <nav className={styles.mobileNavLinks}>
                    <Link to="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Home</Link>

                    <div className={styles.mobileNavLinkItem}>
                        <button className={styles.mobileNavLink} onClick={() => toggleMobileDropdown('pages')}>
                            Pages
                            {activeMobileDropdown === 'pages' ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
                        </button>
                        <div className={`${styles.mobileSubDropdown} ${activeMobileDropdown === 'pages' ? styles.open : ''}`}>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link to="/chefs" onClick={() => setIsMenuOpen(false)}>Pesto's Talented Chefs</Link>
                            <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                            <Link to="/faqs" onClick={() => setIsMenuOpen(false)}>Faq's</Link>
                        </div>
                    </div>

                    <div className={styles.mobileNavLinkItem}>
                        <button className={styles.mobileNavLink} onClick={() => toggleMobileDropdown('shop')}>
                            Shop
                            {activeMobileDropdown === 'shop' ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
                        </button>
                        <div className={`${styles.mobileSubDropdown} ${activeMobileDropdown === 'shop' ? styles.open : ''}`}>
                            <Link to="/all-products" onClick={() => setIsMenuOpen(false)}>All Products</Link>
                  
                        </div>
                    </div>

                    <div className={styles.mobileNavLinkItem}>
                        <button className={styles.mobileNavLink} onClick={() => toggleMobileDropdown('blog')}>
                            Blog
                            {activeMobileDropdown === 'blog' ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
                        </button>
                        <div className={`${styles.mobileSubDropdown} ${activeMobileDropdown === 'blog' ? styles.open : ''}`}>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Latest Posts</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Recipes</a>
                            <a href="#" onClick={() => setIsMenuOpen(false)}>Tips</a>
                        </div>
                    </div>
                </nav>
                <div className={styles.mobileMenuBottom}>
                    <div className={styles.mobileLogin}>
                        <FiUser size={20} /> Login
                    </div>
                    <div className={styles.mobileSelector}>
                        United States (USD $) <MdKeyboardArrowDown size={18} />
                    </div>
                  
                </div>
            </div>
        </div>
    );
}