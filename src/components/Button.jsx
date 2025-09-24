const Button = ({ text, type, onClick }) => {
  const base = "rounded-lg border-0 text-white text-[15px] px-[15px] py-[3px]";

  const variants = {
    STREAMER: base + " m-[10px] bg-[#a8a8a8]",
    ADD:
      "rounded-full w-[30px] h-[30px] m-[5px] p-0 border-2 border-[#5b5b5b] " +
      "bg-white text-[#5b5b5b] text-[20px] font-bold flex items-center justify-center " +
      "hover:bg-[#5b5b5b] hover:text-white",
    EDIT_CANCEL: base + " m-[10px] bg-[#b3b3b3]",
    EDIT_DELETE: base + " m-[10px] bg-gray-500",
    EDIT_DONE: base + " m-[10px] bg-[#bb6969]",
    EDIT_EDIT: base + " m-[10px] bg-[#864a4a]",
  };

  return (
    <button className={variants[type]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
