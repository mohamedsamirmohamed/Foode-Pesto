// About.jsx
import React from 'react';
import styles from './About.module.css'; // Import the CSS module
import premiumMaterialIcon from '../Home/cheese.svg';
import fastDeliveryIcon from '../Home/clock.svg';
import timelyDeliveryIcon from '../Home/smile.svg';
import securePaymentsIcon from '../Home/payment.svg';
import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon from Font Awesome
import steak from '../About/vector-2_b68e1248-3f8d-4dff-a5e5-1d8887a4ff2c.webp';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
// استيراد صور المعرض
import galleryImage1 from '../About/Rectangle_4499.webp'; // استبدل بالمسار الصحيح لصورة اللفائف
import galleryImage2 from '../About/Rectangle_4507.webp'; // استبدل بالمسار الصحيح لصورة الشيف
import galleryImage3 from '../About/Rectangle_4502.webp'; // استبدل بالمسار الصحيح لصورة البيتزا
import galleryImage4 from '../About/Rectangle_4521.webp'; // استبدل بالمسار الصحيح لصورة التاكو

// استيراد صور الشيفات
import chef1Image from '../About/Rectangle_4463.webp'; // استبدل بالمسار الصحيح لصورة الشيف الأول
import chef2Image from '../About/Rectangle_4466.webp'; // استبدل بالمسار الصحيح لصورة الشيف الثاني



// استيراد صور الشيفات
import chef1 from '../About/location-1_ac0af6cc-aad3-4b55-89a9-5da868eb6dc3.webp'; // استبدل بالمسار الصحيح لصورة الشيف الأول
import chef2 from '../About/location-2_38e6cd09-76c1-4b96-a664-5efe004db875.webp'; // استبدل بالمسار الصحيح لصورة الشيف الثاني
import chef3 from '../About/location-3_b0d002d5-87cf-4237-8b37-7c1cc4b87411.webp'; // استبدل بالمسار الصحيح لصورة الشيف الثاني
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div> {/* Overlay for text readability */}
        <p className={styles.restaurantName}>Pesto Restaurant</p>
        <h1 className={styles.heroHeadline}>Make Your Every Moment</h1>
      </div>

      {/* Features Section */}
      <div className={styles.featuresSection}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src={premiumMaterialIcon} alt="Premium Material Icon" />
          </div>
          <h3 className={styles.featureTitle}>Premium Material</h3>
          <p className={styles.featureDescription}>Made from premium materials</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src={fastDeliveryIcon} alt="Fast Delivery Icon" />
          </div>
          <h3 className={styles.featureTitle}>Fast Delivery</h3>
          <p className={styles.featureDescription}>Receive goods in 45 minutes</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src={timelyDeliveryIcon} alt="Timely Delivery Icon" />
          </div>
          <h3 className={styles.featureTitle}>Timely Delivery</h3>
          <p className={styles.featureDescription}>Professional &amp; Friendly service</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <img src={securePaymentsIcon} alt="Secure Payments Icon" />
          </div>
          <h3 className={styles.featureTitle}>Secure Payments</h3>
          <p className={styles.featureDescription}>Car Parking</p>
        </div>
      </div>

      {/* Pesto's Story Section */}
      <div className={styles.pestoStorySection}>
        <div className={styles.pestoStoryImageContainer}>
          <img src={steak} alt="Steak drawing" className={styles.pestoStoryImage} />
        </div>
        <div className={styles.pestoStoryContent}>
          <h2 className={styles.pestoStoryHeadline}>Pesto's Story</h2>
          <p className={styles.pestoStoryParagraph}>
            For our recipes we've put together a comprehensive rundown of questions we hear most often.
          </p>
          <p className={styles.pestoStoryParagraph}>
            Lucky you! Say goodbye to limited budgets, inadequate expertise, and time constraints, and empower your agency’s growth with our comprehensive expert support. Our goal is to craft the ultimate platform to fuel your business growth.
          </p>
          <ul className={styles.pestoStoryList}>
            <li className={styles.pestoStoryListItem}>
              <FaCheck className={styles.checkmark} />
              Say goodbye to the hassle of managing teams
            </li>
            <li className={styles.pestoStoryListItem}>
              <FaCheck className={styles.checkmark} />
              No more worries about maintaining office space
            </li>
            <li className={styles.pestoStoryListItem}>
              <FaCheck className={styles.checkmark} />
              Get a dedicated Project Manager to stay on the loop
            </li>
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Gallery</h2>
        <p className={styles.galleryDescription}>
          For our recipes we've put together a comprehensive rundown of questions we hear most often.
        </p>
        <div className={styles.galleryGrid}>
          <div className={`${styles.galleryItem} ${styles.galleryItemTall}`}>
            <img src={galleryImage1} alt="Product Name 1" />
            <div className={styles.galleryOverlay}>
              <span className={styles.productName}>Shawarma Wraps</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <img src={galleryImage2} alt="Product Name 2" />
            <div className={styles.galleryOverlay}>
              <span className={styles.productName}>Chef's Special</span>
            </div>
          </div>
          <div className={`${styles.galleryItem} ${styles.galleryItemTall}`}> {/* Changed to tall based on the provided image */}
            <img src={galleryImage3} alt="Product Name 3" />
            <div className={styles.galleryOverlay}>
              <span className={styles.productName}>Spicy Pepperoni Pizza</span>
            </div>
          </div>
          <div className={styles.galleryItem}>
            <img src={galleryImage4} alt="Product Name 4" />
            <div className={styles.galleryOverlay}>
              <span className={styles.productName}>Beef Tacos</span>
            </div>
          </div>
          {/* Add the 5th image for the gallery if needed as per previous request */}
          {/* <div className={`${styles.galleryItem} ${styles.galleryItemWide}`}>
            <img src={galleryImage5} alt="Product Name 5" />
            <div className={styles.galleryOverlay}>
              <span className={styles.productName}>Ribs & Fries</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Pesto's Talented Chefs Section - NEW */}
      <div className={styles.chefsSection}>
        <h2 className={styles.chefsTitle}>Pesto's Talented Chefs</h2>
        <div className={styles.chefCardsContainer}>
          <div className={styles.chefCard}>
            <div className={styles.chefImageContainer}>
              <img src={chef1Image} alt="Chef Ethan Hunt" className={styles.chefImage} />
            </div>
            <div className={styles.chefInfoBox}>
              <h3 className={styles.chefName}>Ethan Hunt</h3>
              <p className={styles.chefRole}>FRENCH MASTER CHEF 2018</p>
              <p className={styles.chefDescription}>
                Ethan embarked on his culinary adventure during the early stages of his life, exploring
                the vast and intriguing world of food and flavors.
              </p>
            </div>
          </div>

          <div className={styles.chefCard}>
            <div className={styles.chefImageContainer}>
              <img src={chef2Image} alt="Chef Micheal Edward" className={styles.chefImage} />
            </div>
            <div className={styles.chefInfoBox}>
              <h3 className={styles.chefName}>Micheal Edward</h3>
              <p className={styles.chefRole}>AMERICA'S MASTER CHEF 2021</p>
              <p className={styles.chefDescription}>
                Daniel, an exceptionally skilled chef, possesses an unparalleled aptitude for culinary
                artistry that provide you with an extensive repertoire.
              </p>
            </div>
          </div>
        </div>
      </div>



       <div className={styles.aboutSection}>
      {/* Locations Section */}
      <h2 className={styles.title}>Locations and Schedules</h2>
      <div className={styles.cardsContainer}>
        {/* Card 1 */}
        <div className={styles.card}>
          <img src={chef1} alt="Pesto at 92 Orchard St" className={styles.image} />
          <div className={styles.cardContent}>
            <h3>Pesto at 92 Orchard St</h3>
            <p>Ethan embarked on his culinary adventure during the early stages of his life, exploring.</p>
            <div className={styles.info}>
              <p><FaMapMarkerAlt /> 92 Orchard St, Mahattan, NY</p>
              <p><FaPhoneAlt /> 0515 96 36 36</p>
              <p><FaClock /> Mon - Fri: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <img src={chef2} alt="Pesto at Crown Plaza" className={styles.image} />
          <div className={styles.cardContent}>
            <h3>Pesto at Crown Plaza</h3>
            <p>Ethan embarked on his culinary adventure during the early stages of his life, exploring.</p>
            <div className={styles.info}>
              <p><FaMapMarkerAlt /> 91 Orchard St, Mahattan, NY</p>
              <p><FaPhoneAlt /> 0515 96 36 36</p>
              <p><FaClock /> Mon - Fri: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <img src={chef3} alt="Pesto at Aeon Mall" className={styles.image} />
          <div className={styles.cardContent}>
            <h3>Pesto at Aeon Mall</h3>
            <p>Ethan embarked on his culinary adventure during the early stages of his life, exploring.</p>
            <div className={styles.info}>
              <p><FaMapMarkerAlt /> 93 Orchard St, Mahattan, NY</p>
              <p><FaPhoneAlt /> 0515 96 36 36</p>
              <p><FaClock /> Mon - Fri: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
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
    </div>
  );
};

export default About;