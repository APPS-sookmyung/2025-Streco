import Button from "./Button";

const StreamerRecord = ({
  streamer,
  isEditMode,
  setIsEditMode,
  onDelete,
  onSave,
}) => {
  const handleDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete();
    }
  };

  const handleDoneClick = () => {
    onSave();
  };

  return (
    <div className="w-[445px] flex justify-between items-center ml-0 pt-[10px]">
      <div className="flex items-center !m-0">
        {streamer.image && (
          <img
            src={streamer.image}
            alt={streamer.name}
            className="rounded-full h-[80px] m-[5px]"
          />
        )}
        <h3 className="self-center font-bold">{streamer.name}</h3>
      </div>

      <div className="flex flex-row !m-0">
        {isEditMode ? (
          <>
            <Button
              text="취소"
              type="EDIT_CANCEL"
              onClick={() => setIsEditMode(false)}
            />
            <Button
              text="삭제"
              type="EDIT_DELETE"
              onClick={handleDeleteClick}
            />
            <Button text="완료" type="EDIT_DONE" onClick={handleDoneClick} />
          </>
        ) : (
          <Button
            text="수정"
            type="EDIT_EDIT"
            onClick={() => setIsEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

export default StreamerRecord;
