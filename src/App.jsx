import { useState } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import AlbumInfo from "./pages/AlbumInfo.jsx";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/album/:artistName/:albumName" element={<AlbumInfo />} />
      </Routes>
    </>
  );
}

export default App;
