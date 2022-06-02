import React from 'react';
import WelcomeNavBar from '../components/header/welcomeHeader/WelcomeNavBar'
import LoginBody from '../components/body/LoginBody/LoginBody'
const WelcomePage = () => {
  return (
    <div className="App">
        <WelcomeNavBar></WelcomeNavBar>
        <LoginBody></LoginBody>
    </div>
  );
}

export default WelcomePage;
