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
      <div className="flex !mb-[10px] items-start justify-start">
        <DatePicker
          selected={data.date}
          onChange={(date) => setData({ ...data, date })}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
          popperPlacement="bottom-start"
          disabled={!isEditMode}
          className="bg-white m-0 text-[15px] rounded-[10px] border border-gray-300 px-2 py-1 w-[120px] mr-[10px] h-[30px]"
          popperClassName="datepicker-popper"
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
          className="bg-white m-0 text-[15px] rounded-[10px] border border-gray-300 px-2 py-1 w-[100px] mr-[10px] h-[30px]"
          popperClassName="timepicker-popper"
        />
      </div>

      {/* 스트림 링크 */}
      <div className="flex items-center ml-[10px]">
        <GoPaperclip className="h-[25px] w-[25px]" />
        <textarea
          name="streamlink"
          value={data.link || ""}
          onChange={(e) => setData({ ...data, link: e.target.value })}
          disabled={!isEditMode}
          className="border-0 border-b border-gray-500 text-[15px] resize-none overflow-hidden w-full h-[20px] pt-[5px] mt-[5px] ml-[5px] mr-[20px] align-middle"
        />
      </div>
    </div>
  );
};

export default BroadcastInfo;
