import './SecondHeader.css'
import IconButton from '../../../../components/IconButton/IconButton'
import CartIcon from '../../../../assets/icons/CartIcon'

const SecondHeader = ({ 
  cart,
  onviewCart 
}: { cart: { id: string; quantity: number }[];
  onviewCart: () => void 
}) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="second-header">
      <h1>Shopping Library</h1>
      <div className="cart-container">
        <IconButton 
        icon={<CartIcon />} 
        ariaLabel="view cart" 
        onClick={onviewCart} // open modal
        />
        {totalItems > 0 && <div className="items-in-cart">{totalItems}</div>}
      </div>
    </header>
  );
};

export default SecondHeader;

