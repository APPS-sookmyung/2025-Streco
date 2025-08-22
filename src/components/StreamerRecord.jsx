import "./StreamerRecord.css";

import { useState } from "react";
import streamer2 from "./../assets/streamer2.webp";
import Button from "./Button";

const StreamerRecord = ({ isEditMode, setIsEditMode }) => {
  const handleDeleteClick = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      //삭제
    }
  };
  const handleDoneClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="streamerrecord">
      <div className="streamer">
        <img src={streamer2}></img>
        <h3>Vanilla</h3>
      </div>

      <div className="edit">
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
            onClick={() => {
              setIsEditMode(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default StreamerRecord;
