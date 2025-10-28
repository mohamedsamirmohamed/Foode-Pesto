import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.mainTitle}>Contact Us</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Talk about your contact info</h2>
          <p className={styles.formDescription}>
            Describe a product, make announcements, or welcome customers to your store.
          </p>
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>Full Name *</label>
              <input type="text" id="fullName" name="fullName" placeholder="Your Name" className={styles.inputField} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="emailAddress" className={styles.label}>Email Address *</label>
              <input type="email" id="emailAddress" name="emailAddress" placeholder="Email address" className={styles.inputField} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>Phone Number *</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" className={styles.inputField} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="specialInformation" className={styles.label}>Special Information *</label>
              <textarea id="specialInformation" name="specialInformation" placeholder="Write your message here" className={`${styles.inputField} ${styles.textArea}`}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send message</button>
          </form>
        </div>
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            {/* Embed Google Map here. You'll need an API key for a fully interactive map. 
                For a static map, you can use an iframe with a specific URL. 
                Here's a basic example that mimics the image, but might not be fully interactive without an API key */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11749872.246473484!2d85.3909772!3d29.5804557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37019808a3d5483d%3A0x1d58c7e9a8b1a3e!2sTibet!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tibet Map"
            ></iframe>
            <div className={styles.mapOverlay}>
              <p className={styles.mapOverlayTitle}>Tibet</p>
              <p className={styles.mapOverlaySubtitle}>China</p>
              <div className={styles.mapOverlayActions}>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Tibet" target="_blank" rel="noopener noreferrer" className={styles.mapOverlayLink}>Directions</a>
                <a href="https://www.google.com/maps/place/Tibet" target="_blank" rel="noopener noreferrer" className={styles.mapOverlayLink}>View larger map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;