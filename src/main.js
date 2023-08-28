import { useState } from "react";

import "./App.css";

import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import ViewMovie from "./components/ViewMovie";
import App from "./App";

function Main() {
  return (
    <div>
      <h1>jose</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/viewMovie/:id" element={<ViewMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
