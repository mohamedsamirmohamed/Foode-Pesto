import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../Context/ProductContext';
import styles from './ProductsDetails.module.css';

const storesByCategory = {
  'Burgers': {
    name: 'Bacon Burger',
    address1: '80/A, & 80/A/1 Siddeshwari Circular Road, 9th Floor',
    availability: 'Pickup available, usually ready in 4 hours',
    address2: '80/A, & 80/A/1 Siddeshwari Circular Road, 9th Floor',
    city: 'Dhaka',
    postalCode: '1217',
    country: 'Bangladesh'
  },
  'Chickens': {
    name: 'Grilled Chicken',
    address1: '45/B, Gulshan Avenue, Dhaka',
    availability: 'Pickup available, usually ready in 3 hours',
    address2: '45/B, Gulshan Avenue',
    city: 'Dhaka',
    postalCode: '1212',
    country: 'Bangladesh'
  },
  'Pizzas': {
    name: 'Classic Pizza',
    address1: '123/C, Banani Main Road, Dhaka',
    availability: 'Pickup available, usually ready in 5 hours',
    address2: '123/C, Banani Main Road',
    city: 'Dhaka',
    postalCode: '1213',
    country: 'Bangladesh'
  },
  'Fish': {
    name: 'Fresh Fish',
    address1: '200/D, Mirpur Road, Dhaka',
    availability: 'Pickup available, usually ready in 4 hours',
    address2: '200/D, Mirpur Road',
    city: 'Dhaka',
    postalCode: '1214',
    country: 'Bangladesh'
  },
  'BBQ': {
    name: 'BBQ Platter',
    address1: '75/E, Dhanmondi Lake Road, Dhaka',
    availability: 'Pickup available, usually ready in 6 hours',
    address2: '75/E, Dhanmondi Lake Road',
    city: 'Dhaka',
    postalCode: '1215',
    country: 'Bangladesh'
  },
  'Drinks': {
    name: 'Fresh Beverage',
    address1: '150/F, Kawran Bazaar, Dhaka',
    availability: 'Pickup available, usually ready in 2 hours',
    address2: '150/F, Kawran Bazaar',
    city: 'Dhaka',
    postalCode: '1216',
    country: 'Bangladesh'
  }
};

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductDetails, cart, setCart, isLoadingCart } = useProduct();
  
  const product = getProductDetails(parseInt(id));
  
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedSpice, setSelectedSpice] = useState('Regular');
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState('one-time');
  const [mainImage, setMainImage] = useState(0);
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [showShopPayModal, setShowShopPayModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  const getStoreData = () => {
    return storesByCategory[product?.category] || storesByCategory['Burgers'];
  };

  if (!product) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>المنتج غير موجود</p>
        <button onClick={() => navigate('/all-products')} className={styles.backBtn}>
          العودة للمنتجات
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      size: selectedSize,
      spice: selectedSpice,
      quantity: quantity
    };

    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === itemToAdd.id &&
          item.size === itemToAdd.size &&
          item.spice === itemToAdd.spice
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        // المنتج موجود، زود الكمية
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
      } else {
        // منتج جديد، أضفه للكارت
        updatedCart = [...prevCart, itemToAdd];
      }
      return updatedCart;
    });

    setShowCartModal(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter((item, index) => index !== indexToRemove);
      return updatedCart;
    });
  };

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const calculateDiscount = () => {
    const total = parseFloat(calculateTotal());
    return purchaseType === 'subscribe' ? (total * 0.05).toFixed(2) : '0.00';
  };

  const productImages = [product.image, product.image, product.image, product.image];

  if (isLoadingCart) {
    return (
      <div className={styles.container}>
        <p>جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span onClick={() => navigate('/')}>Home</span>
        <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className={styles.contentWrapper}>
        {/* Left Section - Images */}
        <div className={styles.imagesSection}>
          <div className={styles.mainImageWrapper}>
            <img src={productImages[mainImage]} alt={product.name} className={styles.mainImage} />
          </div>

          <div className={styles.thumbnails}>
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.thumbnail} ${mainImage === idx ? styles.activeThumbnail : ''}`}
                onClick={() => setMainImage(idx)}
              >
                <img src={img} alt={`View ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Details */}
        <div className={styles.detailsSection}>
          <h1 className={styles.productName}>{product.name}</h1>

          <p className={styles.description}>{product.description}</p>

          <div className={styles.priceSection}>
            <span className={styles.price}>${product.price}</span>
            {product.originalPrice && (
              <>
                <span className={styles.originalPrice}>${product.originalPrice}</span>
                <span className={styles.unit}> / kg</span>
              </>
            )}
          </div>

          {/* Shop Pay Message */}
          <div className={styles.shopPayMessage}>
            <p>
              Split your purchase into installments for orders up to{' '}
              <strong>$1,000.00</strong> with{' '}
              <span className={styles.shopLink} onClick={() => setShowShopPayModal(true)}>
                Learn more
              </span>
            </p>
          </div>

          {/* Size Selection */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Size</label>
            <div className={styles.optionButtons}>
              {['Small', 'Medium', 'Large'].map((size) => (
                <button
                  key={size}
                  className={`${styles.optionBtn} ${selectedSize === size ? styles.active : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Spices Selection */}
          <div className={styles.optionGroup}>
            <label className={styles.optionLabel}>Spices</label>
            <div className={styles.optionButtons}>
              {['Regular', 'Spicy', 'Medium'].map((spice) => (
                <button
                  key={spice}
                  className={`${styles.optionBtn} ${selectedSpice === spice ? styles.active : ''}`}
                  onClick={() => setSelectedSpice(spice)}
                >
                  {spice}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className={styles.quantitySection}>
            <label className={styles.optionLabel}>Quantity</label>
            <div className={styles.quantityControl}>
              <button onClick={() => handleQuantityChange(quantity - 1)}>−</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Purchase Type */}
          <div className={styles.purchaseTypeSection}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="purchase"
                value="one-time"
                checked={purchaseType === 'one-time'}
                onChange={(e) => setPurchaseType(e.target.value)}
              />
              <span>One-time purchase</span>
            </label>

            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="purchase"
                value="subscribe"
                checked={purchaseType === 'subscribe'}
                onChange={(e) => setPurchaseType(e.target.value)}
              />
              <span>Subscribe and deliver every 30 days</span>
              <p className={styles.discountText}>You will get a 5% discount on every recurring order.</p>
            </label>
          </div>

          {/* Buttons */}
          <div className={styles.buttonsSection}>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button className={styles.shopPayBtn}>
              Buy with Shop
            </button>
          </div>

          {/* Store Info */}
          <div className={styles.storeInfo}>
            <div className={styles.pickupInfo}>
              <span className={styles.checkIcon}>✓</span>
              <div>
                <p>Pickup available at 80/A, & 80/A/1 Siddeshwari Circular Road, 9th Floor</p>
                <p className={styles.readyTime}>Usually ready in 4 hours</p>
              </div>
            </div>
            <button className={styles.storeInfoBtn} onClick={() => setShowStoreModal(true)}>
              View store information
            </button>
          </div>

          {/* Footer Note */}
          <p className={styles.taxNote}>Taxes and shipping calculated at checkout</p>
        </div>
      </div>

      {/* Store Modal */}
      {showStoreModal && (
        <div className={styles.modalOverlay} onClick={() => setShowStoreModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowStoreModal(false)}>
              ×
            </button>

            <h2 className={styles.modalTitle}>{product?.name}</h2>

            <div className={styles.modalDivider}></div>

            <p className={styles.modalSubtitle}>
              Size: {selectedSize}, Spices: {selectedSpice}
            </p>

            <div className={styles.modalDivider}></div>

            <p className={styles.modalAddress}>{getStoreData().address1}</p>

            <div className={styles.availabilitySection}>
              <span className={styles.checkIcon}>✓</span>
              <p>{getStoreData().availability}</p>
            </div>

            <div className={styles.modalDivider}></div>

            <p className={styles.modalAddress}>{getStoreData().address2}</p>
            <p className={styles.modalCity}>{getStoreData().city}</p>
            <p className={styles.modalPostal}>{getStoreData().postalCode}</p>
            <p className={styles.modalCountry}>{getStoreData().country}</p>
          </div>
        </div>
      )}

      {/* Shop Pay Modal */}
      {showShopPayModal && (
        <div className={styles.modalOverlay} onClick={() => setShowShopPayModal(false)}>
          <div className={styles.shopPayModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowShopPayModal(false)}>
              ×
            </button>

            <div className={styles.shopPayHeader}>
              <div className={styles.shopPayIcon}>shop</div>
              <h2 className={styles.shopPayTitle}>Get it now, pay later</h2>
            </div>

            <div className={styles.shopPayBody}>
              <p className={styles.shopPayDescription}>
                For orders up to <strong>$1,000.00</strong>, select installments at checkout to split
                your purchase into multiple payments.
              </p>

              <div className={styles.shopPayFeature}>
                <span className={styles.featureIcon}>💰</span>
                <p className={styles.featureText}>No fees, ever.</p>
              </div>

              <div className={styles.shopPayFeature}>
                <span className={styles.featureIcon}>📋</span>
                <p className={styles.featureText}>No impact on your credit score to apply.</p>
              </div>

              <p className={styles.shopPayLegal}>
                Payment options are offered by Affirm and are subject to an eligibility check and might
                not be available in all states. CA Residents: Loans by Affirm Loan Services, LLC are
                made or arranged pursuant to a California Finance Lender license.
              </p>

              <div className={styles.shopPayLogos}>
                <div className={styles.affirmLogo}>affirm</div>
                <div className={styles.shopPayLogo}>shop Pay</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCartModal && (
        <div className={styles.modalOverlay} onClick={() => setShowCartModal(false)}>
          <div className={styles.cartModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cartHeader}>
              <h2 className={styles.cartTitle}>Item ({cart.length} items)</h2>
              <button className={styles.cartCloseBtn} onClick={() => setShowCartModal(false)}>
                ×
              </button>
            </div>

            <p className={styles.freeShippingText}>You are eligible for free shipping.</p>

            <div className={styles.cartDivider}></div>

            <div className={styles.cartItems}>
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${item.size}-${item.spice}-${index}`}
                  className={styles.cartItem}
                >
                  <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                  <div className={styles.cartItemDetails}>
                    <h3 className={styles.cartItemName}>{item.name}</h3>
                    <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
                    <p className={styles.cartItemSpecs}>
                      Size: {item.size || 'Medium'}, Spices: {item.spice || 'Regular'}
                    </p>
                    {purchaseType === 'subscribe' && (
                      <>
                        <p className={styles.cartItemSubscription}>Subscription interval: 30 days</p>
                        <p className={styles.cartItemDiscount}>Discount on next order: 5%</p>
                      </>
                    )}
                    <p className={styles.cartItemTotal}>
                      Total: ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.cartItemRight}>
                    <p className={styles.cartItemQuantity}>Qty: {item.quantity || 1}</p>
                    <button
                      className={styles.removeBtn}
                      onClick={() => handleRemoveFromCart(index)}
                      title="حذف العنصر"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <>
                <div className={styles.cartDivider}></div>

                <div className={styles.cartSummary}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Discount:</span>
                    <span>-${calculateDiscount()}</span>
                  </div>
                </div>

                <div className={styles.cartDivider}></div>

                <div className={styles.cartTotal}>
                  <span>Estimated total</span>
                  <span className={styles.totalAmount}>
                    ${(parseFloat(calculateTotal()) - parseFloat(calculateDiscount())).toFixed(2)} USD
                  </span>
                </div>

                <p className={styles.cartTaxNote}>Taxes and shipping calculated at checkout</p>

                <div className={styles.cartButtons}>
                  <button className={styles.viewCartBtn} onClick={() => navigate('/cart')}>
                    View Cart
                  </button>
                  <button className={styles.checkoutBtn}>
                    Checkout
                  </button>
                </div>
              </>
            )}
            {cart.length === 0 && (
              <p className={styles.emptyCartMessage}>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDetails;