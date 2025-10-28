import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaPinterestP, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo + Contact Info */}
        <div className={styles.col}>
          <h2 className={styles.logo}>Pesto!</h2>
          <p className={styles.phone}>02343456</p>
          <p className={styles.address}>
            925 Bald Hill St, Asheville, NC 28803
          </p>
          <a href="mailto:hello@example.com" className={styles.email}>
            hello@example.com
          </a>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <FaSnapchatGhost />
          </div>
        </div>

        {/* Opening Hours */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Opening Hours</h3>
          <ul>
            <li>Mon : 9:00 - 20:30</li>
            <li>Tue : 9:00 - 20:30</li>
            <li>Wed : 9:00 - 20:30</li>
            <li>Thu : 9:00 - 20:30</li>
            <li>Fri : 9:00 - 20:30</li>
            <li>Sat : 9:00 - 20:30</li>
            <li>Sun : Closed</li>
          </ul>
        </div>

        {/* Information */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/chefs">Pesto’s Talent Chefs</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Contact Us</h3>
          <p><FiPhone /> +881234567890</p>
          <p><FiMail /> support@domain.com</p>
          <p><FiMail /> support@domain.com</p>
          <p><FiMapPin /> Address: 123 Suspendis matti, Visaosang<br />
            Building VST District, North American</p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2025, pesto-restaurant <a href="#">Powered by Shopify</a></p>
       
      </div>
    </footer>
  );
};

export default Footer;
