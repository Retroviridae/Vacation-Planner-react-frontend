import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState, useEffect } from 'react';
import { Route, Routes,useNavigate,useParams } from "react-router"
import Header from './Header'
import Destinations from './Destinations'
import Home from './Home'
import Trips from './Trips'
import Stops from './Stops'
import Destination from './Destination'
import Trip from './Trip'
import Stop from './Stop'
import NewDestination from './NewDestination';


function App() {
  let navigate = useNavigate();
  return (
  <div>
    <Header />
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/destinations" element={<Destinations/>} />
            <Route path="/destinations/:id" element={<Destination/>} />
            <Route path="/destinations/new" element={<NewDestination/>} />
            <Route path="/trips" element={<Trips/>} />
            <Route path="/trips/:id" element={<Trip/>} />
            <Route path="/stops" element={<Stops/>} />
            <Route path="/stops/:id" element={<Stop/>} />
          </Routes>
</div>
  );
}

export default App;
