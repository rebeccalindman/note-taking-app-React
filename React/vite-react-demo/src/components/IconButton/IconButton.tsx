import './IconButton.css';


const IconButton = ({ icon, ariaLabel, onClick }: { icon: JSX.Element, ariaLabel: string, onClick: () => void }) => {
  return (
    <button className="icon-button" aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;

