import "./Header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="Header">
      <img src={logo} onClick={() => nav("/")} />
    </header>
  );
};

export default Header;
