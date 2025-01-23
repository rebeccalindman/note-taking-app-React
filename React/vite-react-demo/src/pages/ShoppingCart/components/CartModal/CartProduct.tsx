import React from "react";

interface CartProductProps {
  product: { id: string; name: string; description: string; price: number; quantity: number };
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  return (
    <div className="cart-product">
      <h4>{product.name}</h4>
      <p>
        ${product.price} x {product.quantity} = ${product.price * product.quantity}
      </p>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default CartProduct;
