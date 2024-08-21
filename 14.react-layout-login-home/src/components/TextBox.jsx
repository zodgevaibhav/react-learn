import "./TextBox.css";

/* eslint-disable react/prop-types */
function TextBox({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-box"
    />
  );
}

export default TextBox;
