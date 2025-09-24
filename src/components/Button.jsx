const Button = ({ text, type, onClick }) => {
  const base = "rounded-lg border-0 text-white text-[15px] px-[15px] py-[3px]";

  const variants = {
    STREAMER: base + " m-[10px] bg-[#b31d29]",
    ADD:
      "rounded-full w-[30px] h-[30px] m-[5px] p-0 shadow-[3px_3px_8px_0_rgba(0,0,0,0.2)] " +
      "bg-white text-[20px] font-light flex items-center justify-center " +
      "hover:bg-[#5b5b5b] hover:text-white",
    EDIT_CANCEL: base + " m-[10px] bg-[#f0f2f7] !text-[#292d31]",
    EDIT_DELETE: base + " m-[10px] bg-gray-500",
    EDIT_DONE: base + " m-[10px] bg-[#991930]",
    EDIT_EDIT: base + " m-[10px] bg-[#991930]",
  };

  return (
    <button className={variants[type]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
