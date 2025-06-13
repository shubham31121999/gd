import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Thankyou from "./components/Thankyou";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/dentistry">
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
