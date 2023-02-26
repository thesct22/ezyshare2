import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import SendPage from './pages/SendPage/SendPage';
import ReceivePage from './pages/ReceivePage/ReceivePage';

/**
 * @returns {React.ReactElement} - The main App component
 */
function App() {
  return (
    <div className="App">
      {/* Add routing for home, send and receive pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<SendPage />} />
        <Route path="/receive" element={<ReceivePage />} />
      </Routes>
    </div>
  );
}

export default App;
