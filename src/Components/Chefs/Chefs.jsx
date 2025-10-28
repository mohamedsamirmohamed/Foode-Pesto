import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Chefs.module.css';
import chef1Image from '../About/Rectangle_4463.webp'; // استبدل بالمسار الصحيح لصورة الشيف الأول
import chef2Image from '../About/Rectangle_4466.webp'; // استبدل بالمسار الصحيح لصورة الشيف الثاني

import chef3Image from '../Chefs/Rectangle_4469.avif'; // استبدل بالمسار الصحيح لصورة الشيف الثاني
import chef4Image from '../Chefs/Rectangle_4471.avif'; // استبدل بالمسار الصحيح لصورة الشيف الثاني
import chef5Image from '../Chefs/Rectangle_4473.avif'; // استبدل بالمسار الصحيح لصورة الشيف الثاني
import chef6Image from '../Chefs/Rectangle_4475.avif'; // استبدل بالمسار الصحيح لصورة الشيف الثاني


const Chefs = () => {
  const topChefs = [
    {
      id: 1,
      name: 'Ethan Hunt',
      title: 'FRENCH MASTER CHEF 2018',
      description: 'Ethan embarked on his culinary adventure during the early stages of his life, exploring the vast and intriguing world of food and flavors.',
      img: chef1Image,
    },
    {
      id: 2,
      name: 'Micheal Edward',
      title: "AMERICA'S MASTER CHEF 2021",
      description: 'Daniel, an exceptionally skilled chef, possesses an unparalleled aptitude for culinary artistry that provide you with an extensive repertoire.',
        img: chef2Image,
    }
  ];

  const bottomChefs = [
    {
      id: 1,
      name: 'Robert Estein',
      role: 'ITALIAN CHEF',
      description: 'Robert knows how to astonish people with the mouth-watering Italian dishes that he learned from his grandmother',
      img: chef3Image,
    },
    {
      id: 2,
      name: 'Kevin Miller',
      role: 'ASSISTANT CHEF',
      description: 'Kevin has a deep passion for cooking and wants to become a master chef with his special recipes.',
        img: chef4Image,
    },
    {
      id: 3,
      name: 'Bob Kenedy',
      role: 'SEAFOOD CHEF',
      description: 'Bob loves to cook seafood chef who can offer you magical recipes that will make you fall in love with the seafood items.',
        img: chef5Image,
    },
    {
      id: 4,
      name: 'Daniel Huston',
      role: 'ASIAN STYLE CHEF',
      description: 'Daniel is the finest chef who can offer you the most delicious Asian dishes you are craving to eat.',
        img: chef6Image,
    }
  ];



  
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Pesto's Talented Chefs</h1>
      
      {/* Top Section - Featured Chefs */}
      <div className={styles.topSection}>
        {topChefs.map((chef) => (
          <div key={chef.id} className={styles.topChefCard}>
            <div className={styles.topChefImage}>
               <img src={chef.img} alt={chef.name} />
            </div>
            <div className={styles.topChefContent}>
              <h2 className={styles.topChefName}>{chef.name}</h2>
              <p className={styles.topChefTitle}>{chef.title}</p>
              <p className={styles.topChefDescription}>{chef.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section - Grid Chefs */}
      <div className={styles.bottomSection}>
        {bottomChefs.map((chef) => (
          <div key={chef.id} className={styles.chefCard}>
            <div className={styles.chefImage}>
                <img src={chef.img} alt={chef.name} />
            </div>
            <h3 className={styles.chefName}>{chef.name}</h3>
            <p className={styles.chefRole}>{chef.role}</p>
            <p className={styles.chefDescription}>{chef.description}</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.iconLink}><FaFacebook /></a>
              <a href="#" className={styles.iconLink}><FaTwitter /></a>
              <a href="#" className={styles.iconLink}><FaInstagram /></a>
              <a href="#" className={styles.iconLink}><FaYoutube /></a>
            </div>
          </div>
        ))}
      </div>

         <div className={styles.scrollContainer}>
      <div className={styles.scrollText}>
        <span>Organic Products</span>
        <span>Organic Products</span>
        <span>Organic Products</span>
         <span>Organic Products</span>
          <span>Organic Products</span>
           <span>Organic Products</span>
            <span>Organic Products</span>
      </div>
    </div>
       {/* Subscribe Section */}
      

          <div className={styles.subscribeSection}>
            <h2> Subscribe and Get 10% Discount</h2>
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

export default Chefs;