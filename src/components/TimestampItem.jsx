const TimestampItem = ({ text }) => {
  return (
    <div className="relative !ml-[20px] pl-[2px] border-l-2 border-[#ccc]">
      <div className="relative flex items-start justify-between mb-[16px] last:mb-0">
        {/* marker */}
        <div className="absolute left-[-9px] w-[12px] h-[12px] bg-[#333] rounded-full" />

        {/* content */}
        <div className="!ml-[10px]">
          <div className="text-[13px] text-[#555]">00:20</div>
          <div className="pt-[5px] pr-[10px] pb-[20px] pl-0 text-[15px]">
            {text}
          </div>
        </div>

        {/* real-time */}
        <div className="mr-[25px] text-[13px] text-[#888] flex items-end">
          16:20
        </div>
      </div>
    </div>
  );
};

export default TimestampItem;
