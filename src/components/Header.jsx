import logo from "../assets/logo.webp";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="flex items-start py-5 border-b border-[#e2e2e2]">
      <img
        src={logo}
        onClick={() => nav("/")}
        className="w-[30%] max-w-[150px] h-auto cursor-pointer"
        alt="logo"
      />
    </header>
  );
};

export default Header;
