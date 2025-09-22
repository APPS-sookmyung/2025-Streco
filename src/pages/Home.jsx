import Header from "../components/Header";
import StreamerBar from "../components/StreamerBar";
import RecoCalendar from "../components/RecoCalendar";
import Plan from "../components/Plan";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <StreamerBar></StreamerBar>
      <RecoCalendar></RecoCalendar>
      <Plan></Plan>
    </div>
  );
};

export default Home;
