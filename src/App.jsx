import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Add from "./pages/Add";
import Record from "./pages/Record";
import Notfound from "./pages/Notfound";
import AddStreamer from "./pages/AddStreamer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/record" element={<Record />} />
        <Route path="/AddStreamer" element={<AddStreamer />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
