import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import TurfDetails from '../Components/TurfDetails/TurfDetails';



function TurfDetailsPage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <TurfDetails/>
        <Footer/>

    </div>
  );
}

export default TurfDetailsPage;