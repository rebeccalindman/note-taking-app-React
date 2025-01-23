import React from "react";

interface CartProductProps {
  product: { id: string; name: string; description: string; price: number; quantity?: number | undefined };
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  return (
    <div className="cart-product">
      <div className="cart-product-wrapper">
        <h4>{product.name}</h4>
        <p>{product.description.slice(0, 20)}{product.description.length > 20 ? "..." : ""}</p>
      </div>
      <p className="cart-product-price">
        {product.quantity ? `$${product.price} x ${product.quantity} = $${product.price * product.quantity}` : `Price: $${product.price}`}
      </p>
      <hr />
    </div>
  );
};

export default CartProduct;
