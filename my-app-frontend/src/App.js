import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Musicians from './Musicians';
import MusicianProfile from './MusicianProfile';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Musicians" element={<Musicians />}>
        </Route>
          <Route path=":id" element={<MusicianProfile />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}