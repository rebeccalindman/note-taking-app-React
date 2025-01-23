import React from 'react'
import './ShoppingCart.css'
import SecondHeader from './components/SecondHeader/SecondHeader'
import ProductCard from './components/ProductCard/ProductCard'
import CartModal from './components/CartModal/CartModal'
import { useState } from 'react'

const ShoppingCart = () => {
    const [cart, setCart] = useState<{ id: string; quantity: number }[]>([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State for modal visibility
  
    type Product = {
      id: string;
      name: string;
      description: string;
      price: number;
    };
  
    const handleAddToCart = (productId: string) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === productId);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { id: productId, quantity: 1 }];
        }
      });
    };
  
    const handleRemoveFromCart = (productId: string) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === productId);
        if (existingProduct && existingProduct.quantity > 1) {
          return prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevCart.filter((item) => item.id !== productId);
        }
      });
    };
  
    const handleQuantityChange = (productId: string, newQuantity: number) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    };
  
    const products: Product[] = [
      {
        id: "1",
        name: "Product 1",
        price: 10,
        description: "This is the description for Product 1. Hejhejhejehejej.",
      },
      {
        id: "2",
        name: "Product 2",
        price: 20,
        description: "This is the description for Product 2.",
      },
    ];
  
    return (
      <>
        <SecondHeader cart={cart} onviewCart={() => setIsCartModalOpen(true)} />
        <main>
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  inCart: !!cartItem,
                  quantity: cartItem?.quantity || 0,
                }}
                onAddToCart={() => handleAddToCart(product.id)}
                onRemoveFromCart={() => handleRemoveFromCart(product.id)}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.id, newQuantity)
                }
              />
            );
          })}
        </main>
        {/* Add CartModal */}
        <CartModal
            isOpen={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)} // Close modal
            products={cartDetails as Product[]} // Pass combined cart details
        />
      </>
    );
  };
  
  export default ShoppingCart;
  