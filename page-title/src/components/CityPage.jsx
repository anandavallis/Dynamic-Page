// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityPage from './components/CityPage';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Dynamic City Page</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/city/paris">Paris</Link>
          <Link to="/city/tokyo">Tokyo</Link>
          <Link to="/city/delhi">Delhi</Link>
        </nav>

        <Routes>
          <Route path="/city/:city" element={<CityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
