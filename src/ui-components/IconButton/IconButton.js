import './IconButton.css';

const IconButton = ({type, icon, altText, onClick}) => {
  return (
    <button type={type} className="button-container" onClick={onClick}>
      <img src={icon} alt={altText} className="button-iconImg"/>
    </button>
  );
}

export { IconButton };