import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home1";
import SignupPage from "./pages/Signup";
import DetailsPage from "./pages/Details";
import MyTurfPage from "./pages/MyTurf";

import UserBookingPage from "./pages/UserBooking";
import TurfDetailsPage from "./pages/TurfDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
        <Route path="/myturf" element={<MyTurfPage/>}/>
        <Route path="/turfdetails" element={<TurfDetailsPage/>}/>
        <Route path="/book" element={<UserBookingPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;

