import "./ButtonGrid.css";

const ButtonGrid = ({ children }) => {
  return (
    <>
      <div className="button__grid">{children}</div>
    </>
  );
};

export default ButtonGrid;
