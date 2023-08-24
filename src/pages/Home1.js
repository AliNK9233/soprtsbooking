import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home'



function HomePage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <Home/>
        <Footer/>

    </div>
  );
}

export default HomePage;