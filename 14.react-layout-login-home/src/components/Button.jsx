import "./Button.css";

// ESLint giving warning to add prop validation using prop-types lib. Will do later
// eslint-disable-next-line react/prop-types
function Button({ variant = "primary", children, onClick }) {
  return (
    <button className={`btn button_common btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
