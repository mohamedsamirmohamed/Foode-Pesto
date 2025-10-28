import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import { Star, Play, X } from 'lucide-react';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoTestimonials = [
    {
      id: 1,
      name: 'Austin Bowie',
      role: 'Founder, Restaurant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      videoThumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      videoUrl: 'https://youtu.be/_9VUPq3SxOc?si=ARzrqHyuS_1hMR3S'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Manager',
      videoThumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      videoUrl: 'https://youtu.be/_9VUPq3SxOc?si=ARzrqHyuS_1hMR3S'
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'Owner',
      videoThumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      videoUrl: 'https://youtu.be/_9VUPq3SxOc?si=ARzrqHyuS_1hMR3S'
    },
    {
      id: 4,
      name: 'Hoang De Franklin',
      role: 'Chef',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      videoThumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      videoUrl: 'https://youtu.be/_9VUPq3SxOc?si=ARzrqHyuS_1hMR3S'
    }
  ];

  const textTestimonials = [
    {
      id: 1,
      rating: 5,
      text: '"Truly one of the amazing burger chains we have eaten at. Customer service is also good. Beautiful presentation, amazing taste, and good stuff seasons. Their ras mince cheeseburger with dios sauce is very tasty."',
      author: 'Robert Jackson',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      rating: 5,
      text: '"They make my favorite burgers. I can\'t find a better one. I pretty much live the BIG King XXL. The best in the world! Healthy choices and considerateness of the environment. Everything was delicious."',
      author: 'Jonathan Walker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      rating: 5,
      text: '"Truly one of the amazing burger chains we have eaten at. Customer service is also good. Beautiful presentation, amazing taste, and good stuff seasons. Their ras mince cheeseburger with dios sauce is very tasty."',
      author: 'Christina Kowalski',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      rating: 5,
      text: '"They make my favorite burgers. I can\'t find a better one. I pretty much live the BIG King XXL. The best in the world! Healthy choices and considerateness of the environment. Everything was delicious."',
      author: 'Jonathan Walker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      rating: 5,
      text: '"They make my favorite burgers. I can\'t find a better one. I pretty much live the BIG King XXL. The best in the world! Healthy choices and considerateness of the environment. Everything was delicious."',
      author: 'Jonathan Walker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      rating: 5,
      text: '"They make my favorite burgers. I can\'t find a better one. I pretty much live the BIG King XXL. The best in the world! Healthy choices and considerateness of the environment. Everything was delicious."',
      author: 'Jonathan Walker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  ];

  const handleVideoClick = (url) => {
    setActiveVideo(url);
  };

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/')[3]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <section className={styles.testimonialSection}>
      {/* Video Modal */}
      {activeVideo && (
        <div className={styles.modal} onClick={() => setActiveVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setActiveVideo(null)}
            >
              <X size={28} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={getYouTubeEmbedUrl(activeVideo)}
              title="Video Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Video Testimonials */}
      <div className={styles.videoSection}>
        <h2 className={styles.sectionTitle}>Video Testimonials</h2>
        <div className={styles.videoGrid}>
          {videoTestimonials.map((video) => (
            <div 
              key={video.id} 
              className={styles.videoCard}
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className={styles.videoThumbnail}>
                <img src={video.videoThumbnail} alt={video.name} />
                <div className={styles.playButton}>
                  <Play size={40} fill="currentColor" />
                </div>
              </div>
              <div className={styles.videoInfo}>
                <p className={styles.videoName}>{video.name}</p>
                {video.role && <p className={styles.videoRole}>{video.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Testimonials */}
      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {textTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FDB022" stroke="#FDB022" />
                ))}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.author}>
                <img src={testimonial.image} alt={testimonial.author} className={styles.authorImage} />
                <span className={styles.authorName}>{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
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
    </section>
    
  );
}