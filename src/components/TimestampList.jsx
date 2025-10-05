import TimestampItem from "./TimestampItem";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const MAX_TIMESTAMPS = 50;
const MAX_TEXT_LENGTH = 200;

const TimestampList = ({ list, setList, broadcastInfo, isEditMode }) => {
  const { date, startTime } = broadcastInfo;

  let broadcastStart = null;
  if (date && startTime) {
    broadcastStart = new Date(date);
    broadcastStart.setHours(startTime.getHours());
    broadcastStart.setMinutes(startTime.getMinutes());
    broadcastStart.setSeconds(0);
  }

  // 타임스탬프 추가
  const handleAddTimestamp = () => {
    if (!isEditMode) return;
    if (list.length >= MAX_TIMESTAMPS) {
      alert(`타임스탬프는 최대 ${MAX_TIMESTAMPS}개까지 추가할 수 있습니다.`);
      return;
    }

    if (!date || !startTime) {
      alert(
        "타임스탬프를 추가하기 전에 방송 시작 시간(날짜/시각)을 설정해주세요."
      );
      return;
    }

    const newTimestamp = {
      id: Date.now(),
      text: "새로운 타임스탬프",
      timestampTime: new Date(),
    };

    setList(
      [...list, newTimestamp].sort(
        (a, b) => a.timestampTime.getTime() - b.timestampTime.getTime()
      )
    );
  };

  // 타임스탬프 수정
  const handleEditTimestamp = (id) => {
    if (!isEditMode) return;
    const item = list.find((t) => t.id === id);
    if (!item) return;

    let newText = prompt("타임스탬프 내용을 수정해주세요:", item.text);

    if (newText === null) return;

    if (newText.length > MAX_TEXT_LENGTH) {
      alert(`텍스트는 최대 ${MAX_TEXT_LENGTH}자까지 입력 가능합니다.`);
      newText = newText.substring(0, MAX_TEXT_LENGTH);
    }

    if (newText.trim() === "") {
      alert("타임스탬프 내용은 비워둘 수 없습니다.");
      return;
    }

    setList(list.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  // 타임스탬프 삭제
  const handleDeleteTimestamp = (id, text) => {
    if (!isEditMode) return;
    if (
      window.confirm(
        `[${text.substring(0, 10)}...] 타임스탬프를 정말 삭제하시겠습니까?`
      )
    ) {
      setList(list.filter((t) => t.id !== id));
    }
  };

  return (
    <div>
      <SectionTitle text={"# 타임스탬프"} />
      <div className="ml-[10px]">
        {list.length === 0 ? (
          <div className="text-[14px] text-[#888] mb-[15px]">
            추가된 타임스탬프가 없습니다.
          </div>
        ) : (
          list.map((item) => (
            <TimestampItem
              key={item.id}
              item={item}
              startTime={broadcastStart}
              onEdit={handleEditTimestamp}
              onDelete={handleDeleteTimestamp}
            />
          ))
        )}
      </div>

      <div className="!-mt-[5px]">
        <Button
          text={"+"}
          type="ADD"
          onClick={handleAddTimestamp}
          disabled={!isEditMode || list.length >= MAX_TIMESTAMPS}
        />
      </div>
    </div>
  );
};

export default TimestampList;
