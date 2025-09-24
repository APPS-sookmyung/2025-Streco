import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import StreamerRecord from "../components/StreamerRecord";
import BroadcastInfo from "../components/BroadcastInfo";
import PlayRecord from "../components/PlayRecord";
import TimestampList from "../components/TimestampList";
import useRecord from "../hooks/useRecord";
import { ScheduleDispatchContext } from "../App";

const Form = () => {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const { onSaveRecord, onDeleteRecord } = useContext(ScheduleDispatchContext);

  const curRecordItem = useRecord(params.id);

  const [recordData, setRecordData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (curRecordItem) {
      setRecordData(curRecordItem);
      setIsEditMode(true);
    } else {
      const initialStreamer = location.state?.streamer || null;
      setRecordData({
        id: params.id,
        streamer: { name: initialStreamer, image: "" },
        broadcastInfo: { date: null, startTime: null, link: "" },
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
  }, [params.id, curRecordItem, location.state]);

  const handleSave = () => {
    const streamerName = recordData.streamer.name;
    onSaveRecord(streamerName, recordData);
    setIsEditMode(false);
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
      />
    </div>
  );
};

export default Form;
