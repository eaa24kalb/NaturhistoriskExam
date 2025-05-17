import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Layout';
import Home from './views/Home';
import Exhibits from './views/Exhibits';
import NotFound from './views/Error';

function App() {
  return (
    <Router basename='/NaturhistoriskExam'>
      <Routes>
        {/* Pages with layout (Header + Footer) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/exhibits" element={<Exhibits />} />
        </Route>

        {/* Pages without layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
