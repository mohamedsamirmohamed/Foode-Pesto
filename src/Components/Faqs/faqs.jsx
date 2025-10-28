import React, { useState } from 'react';
import styles from './Faqs.module.css';

const faqsData = [
  {
    question: 'Can I book a table?',
    answer: 'No, we are free of such burdens and operate a first come, first sit policy.',
  },
  {
    question: 'Can I pay in cash?',
    answer: 'Yes, we accept cash payments.', // Changed to reflect common practice
  },
  {
    question: 'Are the buns gluten-free?',
    answer: 'We offer gluten-free bun options upon request.', // Changed to reflect common practice
  },
  {
    question: 'Can I meet Lewis Hamilton?',
    answer: 'We\'re afraid not - he\'s a busy man winning the F1 World Championship!',
  },
  {
    question: 'Can I cancel a reservation?',
    answer: 'As we don\'t take reservations, there\'s no need to cancel!', // Updated based on first FAQ
  },
  {
    question: 'Can I park in front of your restaurant?',
    answer: 'Yes, we have parking space for our customers.',
  },
  {
    question: 'How to become the staff of the restaurant?',
    answer: 'Please inquire within or check our website for job openings.', // Changed to reflect common practice
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <p className={styles.description}>
        For our recipes we've put together a comprehensive rundown of <br /> questions we hear most often.
      </p>

      <div className={styles.faqList}>
        {faqsData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>


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

export default Faqs;