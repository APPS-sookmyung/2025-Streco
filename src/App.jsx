import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Notfound from "./pages/Notfound";
import AddStreamer from "./pages/AddStreamer";

import ScheduleProvider from "./contexts/ScheduleProvider";
import StreamerProvider from "./contexts/StreamerProvider";

function App() {
  return (
    <ScheduleProvider>
      <StreamerProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id?" element={<Form />} />
          <Route path="/addStreamer" element={<AddStreamer />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </StreamerProvider>
    </ScheduleProvider>
  );
}

export default App;
