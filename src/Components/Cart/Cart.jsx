import React, { useState } from 'react';
import { useProduct } from '../Context/ProductContext';
import styles from './Cart.module.css';
import { Trash2, ChevronDown } from 'lucide-react';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateCartItemQuantity,
    getCartTotal,
    getCartItemsCount
  } = useProduct();

  const [specialInstructions, setSpecialInstructions] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateCartItemQuantity(productId, newQuantity);
    }
  };

  const cartTotal = parseFloat(getCartTotal());
  const pricePerKg = (cartTotal / getCartItemsCount()).toFixed(2);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Cart</h1>
        <a href="/all-products" className={styles.shopLink}>
          Shop our products
        </a>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.cartItems}>
          <div className={styles.cartHeader}>
            <div className={styles.headerCell}>Product</div>
            <div className={styles.headerCell}>Quantity</div>
            <div className={styles.headerCell}>Total</div>
          </div>

          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty</p>
              <a href="/all-products" className={styles.continueShoppingBtn}>
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemProduct}>
                    <div className={styles.productImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{item.name}</h3>
                      <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
                      {item.size && (
                        <p className={styles.productDetail}>
                          <span className={styles.label}>Size:</span> {item.size}
                        </p>
                      )}
                      {item.spiceLevel && (
                        <p className={styles.productDetail}>
                          <span className={styles.label}>Spices:</span> {item.spiceLevel}
                        </p>
                      )}
                      {item.subscriptionInterval && (
                        <>
                          <p className={styles.productDetail}>
                            <span className={styles.label}>Subscription interval:</span>
                            <br /> {item.subscriptionInterval}
                          </p>
                          <p className={styles.productDetail}>
                            <span className={styles.label}>Discount on next order:</span>
                            <br /> {item.discount || '0'}%
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div className={styles.itemQuantity}>
                    <div className={styles.quantityControl}>
                      <button
                        className={styles.quantityBtn}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                        }
                        className={styles.quantityInput}
                      />
                      <button
                        className={styles.quantityBtn}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.itemTotal}>
                    <p className={styles.totalPrice}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className={styles.pricePerUnit}>
                      ${(item.price * item.quantity / item.quantity).toFixed(2)} / kg
                    </p>
                  </div>

                  <button
                    className={styles.deleteBtn}
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.subtotalBox}>
            <h2 className={styles.subtotalTitle}>Cart subtotal</h2>
            <div className={styles.subtotalLine}></div>

            <p className={styles.freeShippingText}>
              You are eligible for free shipping.
            </p>

            <div className={styles.subtotalAmount}>
              <span>Subtotal</span>
              <span className={styles.amount}>${cartTotal.toFixed(2)} USD</span>
            </div>

            <div className={styles.instructionsSection}>
              <button
                className={styles.instructionsBtn}
                onClick={() => setShowInstructions(!showInstructions)}
              >
                Order special instructions
                <ChevronDown
                  size={18}
                  style={{
                    transform: showInstructions ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s'
                  }}
                />
              </button>

              {showInstructions && (
                <textarea
                  className={styles.instructionsTextarea}
                  placeholder="Add any special instructions for your order..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                />
              )}
            </div>

            <button className={styles.checkoutBtn}>Checkout</button>

            <p className={styles.paymentInfo}>
              Split your purchase into installments for orders up to{' '}
              <strong>$1,000.00</strong> with{' '}
              <span className={styles.shopPayLogo}>shop</span> <u>Learn more</u>
            </p>

            <div className={styles.paymentMethods}>
              <button className={styles.shopPayBtn}>shop</button>
              <button className={styles.googlePayBtn}>
                <span>Google</span> Pay
              </button>
            </div>

            <p className={styles.taxesNote}>
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;