import React from "react";

import CartProduct from "./CartProduct";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: { id: string; name: string; description: string; price: number; quantity: number }[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, products }) => {
  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: isOpen ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 16,
          borderRadius: 8,
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <h2>Your Cart</h2>
        {products.length > 0 ? (
          products.map((product) => <CartProduct key={product.id} product={product} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export default CartModal;

