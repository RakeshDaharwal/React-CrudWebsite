import React from 'react';
import Create from "../src/Create";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Read from './Read';
import Update from './Update';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

