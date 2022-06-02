import React from 'react';
import WelcomeNavBar from '../components/header/welcomeHeader/WelcomeNavBar'
import WelcomeBody from '../components/body/WelcomeBody/WelcomeBody'
const WelcomePage = () => {
  return (
    <div className="App">
        <WelcomeNavBar></WelcomeNavBar>
        <WelcomeBody></WelcomeBody>
    </div>
  );
}

export default WelcomePage;
