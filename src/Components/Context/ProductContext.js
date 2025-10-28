import React, { createContext, useState, useEffect, useContext } from 'react';
import { products as initialProducts } from '../Main';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [isLoadingCart, setIsLoadingCart] = useState(true);
  
  // Filter states
  const [filters, setFilters] = useState({
    availability: [],
    priceRange: { min: 0, max: 3350 },
    productType: [],
    brand: [],
    size: [],
    spices: []
  });

  // 🛒 تحميل الكارت من localStorage عند فتح التطبيق
  useEffect(() => {
    const loadCartFromStorage = () => {
      try {
        const result = localStorage.getItem('shopping-cart'); // ✅ getItem
        if (result) {
          const savedCart = JSON.parse(result);
          setCart(savedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        setCart([]);
      } finally {
        setIsLoadingCart(false);
      }
    };

    loadCartFromStorage();
  }, []);

  // 💾 حفظ الكارت في localStorage كل ما يتغير
  useEffect(() => {
    const saveCartToStorage = () => {
      try {
        if (cart.length > 0) {
          const sanitizedCart = cart.map(item => ({
            ...item,
            quantity: item.quantity || 1
          }));
          localStorage.setItem('shopping-cart', JSON.stringify(sanitizedCart)); // ✅ setItem
        } else {
          localStorage.removeItem('shopping-cart'); // ✅ removeItem
        }
      } catch (error) {
        console.error('Error saving cart to storage:', error);
      }
    };

    if (!isLoadingCart) {
      saveCartToStorage();
    }
  }, [cart, isLoadingCart]);

  // 🔍 تطبيق الفلاتر
  useEffect(() => {
    applyAllFilters();
  }, [searchTerm, filters]);

  const applyAllFilters = () => {
    let filtered = initialProducts;

    // Search filter
    if (searchTerm) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name?.toLowerCase().includes(lowercasedSearchTerm) ||
        product.category?.toLowerCase().includes(lowercasedSearchTerm) ||
        product.description?.toLowerCase().includes(lowercasedSearchTerm)
      );
    }

    // Availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter(product => {
        const hasStock = (product.stock || 0) > 0;
        const wantsInStock = filters.availability.includes('in-stock');
        const wantsOutStock = filters.availability.includes('out-stock');
        
        if (wantsInStock && hasStock) return true;
        if (wantsOutStock && !hasStock) return true;
        return false;
      });
    }

    // Price range filter
    filtered = filtered.filter(product =>
      (product.price || 0) >= filters.priceRange.min && (product.price || 0) <= filters.priceRange.max
    );

    // Product type filter
    if (filters.productType.length > 0) {
      filtered = filtered.filter(product =>
        filters.productType.includes(product.type)
      );
    }

    // Brand filter
    if (filters.brand.length > 0) {
      filtered = filtered.filter(product =>
        filters.brand.includes(product.brand)
      );
    }

    // Size filter
    if (filters.size.length > 0) {
      filtered = filtered.filter(product =>
        filters.size.includes(product.size)
      );
    }

    // Spices filter
    if (filters.spices.length > 0) {
      filtered = filtered.filter(product =>
        filters.spices.includes(product.spiceLevel)
      );
    }

    setFilteredProducts(filtered);
  };

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const updatePriceRange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min: parseFloat(min) || 0, max: parseFloat(max) || 3350 }
    }));
  };

  const resetFilters = () => {
    setFilters({
      availability: [],
      priceRange: { min: 0, max: 3350 },
      productType: [],
      brand: [],
      size: [],
      spices: []
    });
  };

  // 🛍️ التعامل مع الكارت
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getProductDetails = (id) => {
    return initialProducts.find(product => product.id === id);
  };

  const getFeaturedProducts = () => {
    const burgers = initialProducts.filter(p => p.category === 'Burgers').slice(0, 4);
    const bbq = initialProducts.filter(p => p.category === 'BBQ').slice(0, 4);
    return [...burgers, ...bbq];
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        searchTerm,
        setSearchTerm,
        getProductDetails,
        getFeaturedProducts,
        filters,
        updateFilter,
        updatePriceRange,
        resetFilters,
        initialProducts,
        getCartTotal,
        getCartItemsCount,
        isLoadingCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
