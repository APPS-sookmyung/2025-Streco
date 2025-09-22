const Button = ({ text, type, onClick }) => {
  const base = "rounded-lg m-[10px]";

  const variants = {
    STREAMER:
      base + " bg-[#a8a8a8] text-white text-[15px] px-[10px] py-[5px] border-0",
    ADD: "rounded-full w-[30px] h-[30px] m-[5px] p-0 border-2 border-[#5b5b5b] bg-white text-[#5b5b5b] text-[20px] font-bold flex items-center justify-center hover:bg-[#5b5b5b] hover:text-white",
    EDIT_CANCEL:
      base + " bg-[#b3b3b3] text-white text-[15px] px-[15px] py-[3px] border-0",
    EDIT_DELETE:
      base + " bg-gray-500 text-white text-[15px] px-[15px] py-[3px] border-0",
    EDIT_DONE:
      base + " bg-[#bb6969] text-white text-[15px] px-[15px] py-[3px] border-0",
    EDIT_EDIT:
      base + " bg-[#864a4a] text-white text-[15px] px-[15px] py-[3px] border-0",
  };

  return (
    <button className={variants[type]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
