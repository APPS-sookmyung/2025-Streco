import "./BroadcastInfo.css";
import SectionTitle from "./SectionTitle";
import DatePicker from "react-datepicker";
import { GoPaperclip } from "react-icons/go";
import "react-datepicker/dist/react-datepicker.css";

const BroadcastInfo = ({ isEditMode, data, setData }) => {
  return (
    <div>
      <SectionTitle text={"# 방송 시작 시간"} />

      {/* 날짜/시간 선택 */}
      <div className="w-[95%] grid grid-cols-2 !mb-[10px] !ml-[15px] items-start justify-start text-white text-[15px]">
        <DatePicker
          selected={data.date}
          onChange={(date) => setData({ ...data, date })}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
          popperPlacement="bottom-start"
          disabled={!isEditMode}
          className="rounded-[4px] border border-gray-300 px-2 py-1 mr-[10px] h-[35px] w-full"
          popperClassName="datepicker-popper ml-[15px]"
          portalId="root-portal"
        />

        <DatePicker
          selected={data.startTime}
          onChange={(time) => setData({ ...data, startTime: time })}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={1}
          timeCaption="시간"
          dateFormat="HH:mm"
          placeholderText="시간 선택"
          disabled={!isEditMode}
          className="rounded-[4px] border border-gray-300 px-2 py-1 mr-[10px] h-[35px] w-full"
          popperClassName="timepicker-popper"
          portalId="root-portal"
        />
      </div>

      {/* 스트림 링크 */}
      <div className="flex items-center !ml-[15px] text-white">
        <GoPaperclip className="h-[25px] w-[25px] " />
        <div className="border-b border-gray-500 w-full">
          <textarea
            name="streamlink"
            value={data.link || ""}
            onChange={(e) => setData({ ...data, link: e.target.value })}
            disabled={!isEditMode}
            className="resize-none overflow-hidden w-full h-[20px] pb-2 mt-3 ml-[5px] mr-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BroadcastInfo;
