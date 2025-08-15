import Header from "../components/Header";
import StreamerRecord from "../components/StreamerRecord";
import BroadcastInfo from "../components/BroadcastInfo";
import PlayRecord from "../components/PlayRecord";
import TimestampList from "../components/TimestampList";

const Record = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <StreamerRecord />
      </div>
      <BroadcastInfo></BroadcastInfo>
      <PlayRecord></PlayRecord>
      <TimestampList></TimestampList>
    </div>
  );
};

export default Record;
