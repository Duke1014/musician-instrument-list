import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Musicians from './Musicians';
import MusicianProfile from './MusicianProfile';
import Instruments from './Instruments';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Musicians" element={<Musicians />}>
          <Route path=":id" element={<MusicianProfile />}>
          </Route>
        </Route>
        <Route path="Instruments" element={<Instruments />}>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}