import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewMovie from './components/ViewMovie.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/viewMovie/:id" element={<ViewMovie />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

