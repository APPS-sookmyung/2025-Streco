const Button = ({ text, type, onClick }) => {
  const base =
    "rounded-lg border-0 text-white text-sm md:text-xl md:font-base px-2 py-1 md:px-4 md:py-[3px]";

  const variants = {
    STREAMER: base + "ml-3 mr-2 my-1.5 mt-2 md:m-3 md:my-2 bg-[#b31d29]",
    ADD:
      "rounded-full w-5 h-5 md:w-9 md:h-9 m-[5px] p-0 shadow-[3px_3px_8px_0_rgba(0,0,0,0.2)] " +
      "bg-white text-[20px] font-light flex items-center justify-center " +
      "hover:bg-[#5b5b5b] hover:text-white",
    EDIT_CANCEL: base + "m-2 md:m-3 lg:m-4 bg-[#f0f2f7] !text-[#292d31]",
    EDIT_DELETE: base + "m-2 md:m-3 lg:m-4 bg-gray-500",
    EDIT_DONE: base + "m-2 md:m-3 lg:m-4 bg-[#991930]",
    EDIT_EDIT: base + "m-2 md:m-3 lg:m-4 bg-[#991930]",
  };

  return (
    <button className={variants[type]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
