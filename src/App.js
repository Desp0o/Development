import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainGeo from './main_GEO';


import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='*' element={<MainGeo />} />
      </Routes>
    </div>
  );
}

export default App;
