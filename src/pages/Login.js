import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Login from '../Components/Login/Login'



function LoginPage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <Login/>
        <Footer/>

    </div>
  );
}

export default LoginPage;

