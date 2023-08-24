import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Signup from '../Components/Signup/Signup'



function SignupPage() {
  return (
    <div className="homeParentDiv">
        <Header/>
        <Signup/>
        <Footer/>

    </div>
  );
}

export default SignupPage;