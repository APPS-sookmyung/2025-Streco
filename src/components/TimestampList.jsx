import "./TimestampList.css";

import TimestampItem from "./TimestampItem";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const TimestampList = () => {
  return (
    <div>
      <SectionTitle text={"# 타임스탬프"} />
      <TimestampItem text={"궁 타이밍bb"}></TimestampItem>
      <TimestampItem text={"클러치!!!"}></TimestampItem>
      <div className="button">
        <Button text={"+"} type={"ADD"} />
      </div>
    </div>
  );
};

export default TimestampList;
