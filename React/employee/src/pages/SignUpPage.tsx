import React from 'react';
import WelcomeNavBar from '../components/header/welcomeHeader/WelcomeNavBar'
import SignUpBody from '../components/body/SignUpBody/SignUpBody'
const WelcomePage = () => {
  return (
    <div className="App">
        <WelcomeNavBar></WelcomeNavBar>
        <SignUpBody></SignUpBody>
    </div>
  );
}

export default WelcomePage;
