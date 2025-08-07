import Header from "../components/Header";
import StreamerBar from "../components/StreamerBar";
import RecoCalendar from "../components/RecoCalendar";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <StreamerBar></StreamerBar>
      </div>
      <RecoCalendar></RecoCalendar>
      <Plan></Plan>
    </div>
  );
};

export default Home;
