import { useState } from "react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  Home;

  return (
    <>
      <div>
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
