import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import StreamerRecord from "../components/StreamerRecord";
import BroadcastInfo from "../components/BroadcastInfo";
import PlayRecord from "../components/PlayRecord";
import TimestampList from "../components/TimestampList";
import useRecord from "../hooks/useRecord";
import { useScheduleDispatch } from "../hooks/useSchedule";
import { useStreamerState } from "../hooks/useStreamer";

const Form = () => {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();

  const { onSaveRecord, onDeleteRecord } = useScheduleDispatch();
  const streamers = useStreamerState();

  const curRecordItem = useRecord(params.id);

  const [recordData, setRecordData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (curRecordItem) {
      setRecordData({
        ...curRecordItem,
        broadcastInfo: {
          ...curRecordItem.broadcastInfo,
          date: curRecordItem.broadcastInfo.date
            ? new Date(curRecordItem.broadcastInfo.date)
            : new Date(),
          startTime: curRecordItem.broadcastInfo.startTime
            ? new Date(curRecordItem.broadcastInfo.startTime)
            : new Date(),
        },
      });
      setIsEditMode(true);
    } else {
      const initialStreamerName = location.state?.streamer || null;

      const streamerInfo = streamers.find(
        (it) => it.name === initialStreamerName
      );

      setRecordData({
        id: params.id,
        streamer: {
          name: initialStreamerName,
          image: streamerInfo ? streamerInfo.image : "",
        },
        broadcastInfo: {
          date: new Date(),
          startTime: new Date(),
          link: "",
        },
        playRecord: {
          game: null,
          character: null,
          position: null,
          memo: "",
          matchEnabled: false,
          score: { my: 0, enemy: 0 },
        },
        timestampList: [],
        updatedAt: new Date().toISOString(),
      });
      setIsEditMode(true);
    }
  }, [params.id, curRecordItem, location.state, streamers]);

  const handleSave = () => {
    if (!recordData.streamer.name) {
      alert("스트리머 정보가 없습니다.");
      nav("/");
      return;
    }
    onSaveRecord(recordData.streamer.name, recordData);
    nav("/");
  };

  const handleDelete = () => {
    onDeleteRecord(recordData.streamer.name, params.id);
    nav("/");
  };

  if (!recordData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <StreamerRecord
        streamer={recordData.streamer}
        recordId={recordData.id}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        onDelete={handleDelete}
        onSave={handleSave}
      />
      <BroadcastInfo
        isEditMode={isEditMode}
        data={recordData.broadcastInfo}
        setData={(newData) =>
          setRecordData({ ...recordData, broadcastInfo: newData })
        }
      />
      <PlayRecord
        isEditMode={isEditMode}
        data={recordData.playRecord}
        setData={(newData) =>
          setRecordData({ ...recordData, playRecord: newData })
        }
      />
      <TimestampList
        isEditMode={isEditMode}
        list={recordData.timestampList}
        setList={(newData) =>
          setRecordData({ ...recordData, timestampList: newData })
        }
        broadcastInfo={recordData.broadcastInfo}
      />
      <div className="h-10"></div>
    </div>
  );
};

export default Form;
