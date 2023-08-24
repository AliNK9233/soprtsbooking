import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import UserBooking from '../Components/UserBooking/UserBooking';



function UserBookingPage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <UserBooking/>
        <Footer/>

    </div>
  );
}

export default UserBookingPage;