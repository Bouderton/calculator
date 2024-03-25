import "./Button.css";

const Button = ({ value, onClick, className }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Button;
