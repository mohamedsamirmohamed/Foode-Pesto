import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import OurFeaturedItems from '../OurFeaturedItems/OurFeaturedItems';
import premiumMaterialIcon from '../Home/cheese.svg';
import fastDeliveryIcon from '../Home/clock.svg';
import timelyDeliveryIcon from '../Home/smile.svg';
import securePaymentsIcon from '../Home/payment.svg';

// صور قائمة الطعام
import bbqImage from '../imagess/OIP.webp';
import burgersImage from '../imagess/08e757c5568b2b51560890e0f96f52534a2ba258_2000x2000.webp';
import chickensImage from '../imagess/Keto-chicken-nuggets-233x290.jpg';
import drinksImage from '../imagess/Fresh Orange Juice.jpeg';
import fishImage from '../imagess/OIP copy.webp';
import pizzasImage from '../imagess/OIP copy 2.webp';
import PestosFeatured from '../PestosFeatured/PestosFeatured';
import { useNavigate } from 'react-router-dom'; // ✅ هنا التعديل
import BlogPosts from '../BlogPosts/BlogPosts';

const Home = () => {
  const navigate = useNavigate(); // ✅ استخدمنا hook التنقل الصحيح

  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 65);

    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hrs: 0, min: 0, sec: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // ✅ هنا تعديل الزر
  const handleOrderClick = () => {
    navigate('/all-products'); // بدل Navigate('/all-products')
  };

  const isSaleEnded = Object.values(timeLeft).every(val => val === 0);

  const timerDisplay = Object.keys(timeLeft).map((interval) => (
    <div className={styles.timerItem} key={interval}>
      <span className={styles.timerNumber}>
        {String(timeLeft[interval]).padStart(2, '0')}
      </span>
      <span className={styles.timerLabel}>
        {interval.charAt(0).toUpperCase() + interval.slice(1)}
      </span>
    </div>
  ));

  const featuredMenuItems = [
    { id: 1, name: 'BBQ', itemsCount: 8, image: bbqImage },
    { id: 2, name: 'Burgers', itemsCount: 8, image: burgersImage },
    { id: 3, name: 'Chickens', itemsCount: 8, image: chickensImage },
    { id: 4, name: 'Drinks', itemsCount: 8, image: drinksImage },
    { id: 5, name: 'Fish', itemsCount: 8, image: fishImage },
    { id: 6, name: 'Pizzas', itemsCount: 8, image: pizzasImage },
  ];

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Truly one of the amazing burger chains we have eaten at! Customer service is also good. Beautiful presentation, amazing taste, and good staff, awesome. Their mac mince cheeseburger with olive sauce is very tasty.",
      name: "Alfredo Bator",
      title: "Hair Stylist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      rating: 5,
      text: "They make my favorite burgers. I can't find a better one. I pretty much love BIG King XXL, the best in the world! Healthy choices and consciousness of the environment. Everything was delicious",
      name: "Sadiq Parker",
      title: "Art Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      rating: 5,
      text: "Truly one of the amazing burger chains we have eaten at! Customer service is also good. Beautiful presentation, amazing taste, and good staff, awesome. Their mac mince cheeseburger with olive sauce is very tasty.",
      name: "Ibrahima Apan",
      title: "Hair Stylist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: 4,
      rating: 5,
      text: "They make my favorite burgers. I can't find a better one. I pretty much love BIG King XXL, the best in the world! Healthy choices and consciousness of the environment. Everything was delicious",
      name: "Jonathan Parker",
      title: "Art Director",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className={styles.star}>★</span>
    ));
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hot Beef Burger</h1>
          <p className={styles.heroSubtitle}>
            Special Deal only on TUESDAY every week
          </p>
          <h2 className={styles.heroOffer}>Buy 1 Get One FREE!</h2>
          <button
            className={styles.orderButton}
            onClick={handleOrderClick}
          >
            Order Now
          </button>
        </div>
        <div className={styles.burgerImageContainer}></div>
      </header>

      <section className={styles.winterSaleSection}>
        <div className={styles.winterSaleContent}>
          <h3 className={styles.winterSaleTitle}>Winter Wonderland Sale</h3>
          <p className={styles.winterSaleText}>
            Gear up for the season with our limited-time offers!
          </p>
        </div>
        <div className={styles.winterSaleTimer}>
          {!isSaleEnded ? timerDisplay : (
            <span className={styles.saleEndedText}>Sale Ended!</span>
          )}
        </div>
        <button className={styles.shopNowButton} onClick={handleOrderClick}>Shop Now</button>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <img src={premiumMaterialIcon} alt="Premium Material" className={styles.featureIcon} />
          <h4 className={styles.featureTitle}>Premium Material</h4>
          <p className={styles.featureDescription}>Made from premium materials</p>
        </div>
        <div className={styles.featureItem}>
          <img src={fastDeliveryIcon} alt="Fast Delivery" className={styles.featureIcon} />
          <h4 className={styles.featureTitle}>Fast Delivery</h4>
          <p className={styles.featureDescription}>Receive goods in 45 minutes</p>
        </div>
        <div className={styles.featureItem}>
          <img src={timelyDeliveryIcon} alt="Timely Delivery" className={styles.featureIcon} />
          <h4 className={styles.featureTitle}>Timely Delivery</h4>
          <p className={styles.featureDescription}>Professional & friendly service</p>
        </div>
        <div className={styles.featureItem}>
          <img src={securePaymentsIcon} alt="Secure Payments" className={styles.featureIcon} />
          <h4 className={styles.featureTitle}>Secure Payments</h4>
          <p className={styles.featureDescription}>Safe and secure payment options</p>
        </div>
      </section>

      <section className={styles.featuredMenuSection}>
        <h2 className={styles.featuredMenuTitle}>Pesto's Featured Menu</h2>
        <div className={styles.menuItemsGrid}>
          {featuredMenuItems.map(item => (
            <div className={styles.menuItem} key={item.id}>
              <img src={item.image} alt={item.name} className={styles.menuItemImage} />
              <h4 className={styles.menuItemName}>{item.name}</h4>
              <p className={styles.menuItemCount}>({item.itemsCount} items)</p>
            </div>
          ))}
        </div>
      </section>

      <OurFeaturedItems />
      <PestosFeatured />

      <section className={styles.testimonialSection}>
        <div className={styles.testimonialContainer}>
          <h2 className={styles.testimonialTitle}>Testimonials</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.starsContainer}>
                  {renderStars(testimonial.rating)}
                </div>
                <p className={styles.testimonialText}>
                  "{testimonial.text}"
                </p>
                <div className={styles.authorSection}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={styles.authorAvatar}
                  />
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{testimonial.name}</p>
                    <p className={styles.authorTitle}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlogPosts />
    </div>
  );
};

export default Home;
