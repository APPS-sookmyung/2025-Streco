import TimestampItem from "./TimestampItem";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const TimestampList = () => {
  return (
    <div>
      <SectionTitle text={"# 타임스탬프"} />
      <div className="ml-[10px]">
        <TimestampItem text={"궁 타이밍bb"} />
        <TimestampItem text={"클러치!!!"} />
      </div>
      <div className="!-mt-[5px]">
        <Button text={"+"} type="ADD" />
      </div>
    </div>
  );
};

export default TimestampList;
