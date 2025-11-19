import { GoPencil, GoTrash } from "react-icons/go";
import { formatTime, formatElapsedTime } from "../util/timeUtils";

const TimestampItem = ({ item, startTime, onEdit, onDelete }) => {
  const elapsedTime = formatElapsedTime(item.timestampTime, startTime);
  const realTime = formatTime(item.timestampTime);

  return (
    <div className="relative !ml-[20px] pl-[2px] border-l-2 border-[#ccc]">
      <div className="relative flex items-start justify-between mb-[16px] last:mb-0">
        {/* marker */}
        <div className="absolute left-[-9px] w-[12px] h-[12px] bg-[#CD0000] rounded-full" />

        {/* content */}
        <div className="!ml-[10px] flex-grow">
          <div className="text-[13px] text-[#a6a6a6]">{elapsedTime}</div>
          <div className="pt-[5px] pr-[10px] pb-[5px] pl-0 text-[15px] whitespace-pre-wrap text-white">
            {item.text}
          </div>
        </div>

        {/* real-time & Buttons */}
        <div className="mr-[25px] flex flex-col items-end">
          <div className="text-[13px] text-[#a6a6a6] mb-[8px]">{realTime}</div>
          <div className="flex space-x-[8px]">
            <GoPencil
              className="text-[15px] text-[#a6a6a6] cursor-pointer hover:text-[#b2b2b2]"
              onClick={() => onEdit(item.id)}
            />
            <GoTrash
              className="text-[15px] text-[#a6a6a6] cursor-pointer hover:text-[#dc3545]"
              onClick={() => onDelete(item.id, item.text)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimestampItem;
