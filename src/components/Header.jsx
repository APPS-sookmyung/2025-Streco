import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="flex w-full py-5 border-b border-white/10 justify-between items-center">
      <img
        src={logo}
        onClick={() => nav("/")}
        className="w-[30%] max-w-[150px] h-auto cursor-pointer"
        alt="logo"
      />
      <HiOutlineMenu
        className="text-white text-3xl cursor-pointer"
        onClick={() => nav("/AllStreamers")}
      />
    </header>
  );
};

export default Header;
