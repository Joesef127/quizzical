import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Intro from './Intro.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Intro />} />
        <Route path="/quiz" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
