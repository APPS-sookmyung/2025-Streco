import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const nav = useNavigate();

  return (
    <header className="flex items-center justify-between w-full py-3 m-auto border-b md:py-5 lg:py-6 border-white/10">
      <img
        src={logo}
        onClick={() => nav("/")}
        className="w-[30%] max-w-[150px] h-auto cursor-pointer"
        alt="logo"
      />
      <HiOutlineMenu
        className="text-2xl text-white cursor-pointer md:text-3xl"
        onClick={() => nav("/AllStreamers")}
      />
    </header>
  );
};

export default Header;
