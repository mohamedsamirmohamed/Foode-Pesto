import styles from './BlogPosts.module.css';
import imge from '../BlogPosts/Rectangle_4449.webp';
import imge1 from '../BlogPosts/Rectangle_4448.webp';
import imge2 from '../BlogPosts/Rectangle_4455.webp';
import imge3 from '../BlogPosts/Rectangle_4456.webp';


const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: imge,
      date: 'March 1, 2022',
      author: 'Md Rifat',
      title: 'We give ourselves an Italian taste',
      excerpt: 'On a cloudy day like today, I wanted to talk to you about this Carbonara...'
    },
    {
      id: 2,
      image: imge1,
      date: 'March 1, 2022',
      author: 'Md Rifat',
      title: 'Waldorf - the star original salad.',
      excerpt: 'Welcome to Paulina Cocina, dearest human inhabitants of the world, to this edition, where you...'
    },
    {
      id: 3,
      image: imge2,
      date: 'March 1, 2022',
      author: 'Md Rifat',
      title: 'Pesto Bacon Burger, New Taste',
      excerpt: 'They solve the matter with a bit of film paper, and I assure you they...'
    },
    {
      id: 4,
      image: imge3,
      date: 'March 1, 2022',
      author: 'Md Rifat',
      title: 'Cheese For New Taste',
      excerpt: 'First things first, how do I make homemade sausage? Well, here we show you it...'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog Posts</h1>
      
      <div className={styles.grid}>
        {posts.map(post => (
          <article key={post.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>
            
            <div className={styles.metadata}>
              <span className={styles.date}>
                <span className={styles.icon}>📅</span>
                {post.date}
              </span>
              <span className={styles.author}>
                <span className={styles.icon}>✏️</span>
                {post.author}
              </span>
            </div>
            
            <h2 className={styles.title}>{post.title}</h2>
            
            <div className={styles.excerpt}>
              {post.excerpt}
              <a href="#" className={styles.readMore}>Read more</a>
            </div>
          </article>
        ))}
      </div>
      
      <div className={styles.buttonWrapper}>
        <button className={styles.seeAllButton}>See All</button>
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

export default BlogPosts;