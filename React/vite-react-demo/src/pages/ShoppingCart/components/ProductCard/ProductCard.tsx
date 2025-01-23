import "./ProductCard.css";
import CartIcon from "../../../../assets/Icons/CartIcon";
import React from "react";

interface ProductCardProps {
    product: {
      id: string;
      name: string;
      description: string;
      price: number;
      inCart: boolean;
      quantity: number;
    };
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
    onQuantityChange: (quantity: number) => void; // New prop for handling input changes
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onAddToCart,
    onRemoveFromCart,
    onQuantityChange,
  }) => {
    return (
      <article className="product-card">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
  
        {/* Show current quantity if the product is in the cart */}
        {product.inCart ? (
          <div className="quantity-container">
            <button onClick={onRemoveFromCart}>-</button>
            {/* Handle quantity updates from the input field */}
            <input
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) => {
                const newQuantity = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
                onQuantityChange(newQuantity); // Call the handler with the new quantity
              }}
            />
            <button onClick={onAddToCart}>+</button>
          </div>
        ) : (
          <button onClick={onAddToCart}>Add to cart</button>
        )}
      </article>
    );
  };
  
  export default ProductCard;
  

