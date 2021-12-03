import './BaseButton.css';

const BaseButton = ({title, type, onClick}) => {
  var styleVariants = type ? `button button-${type}` : `button`;
  
  return (
    <button type="{type}" className={styleVariants} onClick={onClick}>
      {title}
    </button>
  );
}

export { BaseButton };