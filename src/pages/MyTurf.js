import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MyTurf from '../Components/MyTurf/MyTurf'



function MyTurfPage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <MyTurf/>
        <Footer/>

    </div>
  );
}

export default MyTurfPage;