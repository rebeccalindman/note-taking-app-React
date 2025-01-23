import React from "react";

import CartProduct from "./CartProduct";
import "./CartModal.css";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: { id: string; name: string; description: string; price: number; quantity?: number|undefined }[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, products }) => {
  return (
    <section className="cart-modal"
      style={{
        display: isOpen ? "flex" : "none",
      }}
    >
      <div>
        <h2>Your Cart</h2>
        {products.length > 0 ? (
          products.map((product) => <CartProduct key={product.id} product={product} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
        <p className="total">Total: ${products.reduce((total, product) => total + product.price * (product.quantity || 1), 0)}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export default CartModal;

