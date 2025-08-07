import "./Button.css";

const Button = ({ text, type }) => {
  return <button className={`Button Button_${type}`}>{text}</button>;
};

export default Button;
