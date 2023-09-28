import React, {useState} from 'react';

import appStyles from './app.module.css';

import {Header} from '../header/header';
import {MainPage} from '../../pages/main-page/main-page';
import {NavButton} from '../nav-button/nav-button';

function App() {
  const [buttonIsActive, setButtonIsActive] = useState<string>('');

  const handleButtonIsActive = (e: any) => {
    e.stopPropagation();
    setButtonIsActive(e.target.id);
    console.log(e.target.id)
  }

  return (
    <main className={appStyles.app}>
      <Header/>
      <nav className={appStyles.nav}>
        <NavButton buttonName="ГЛАВНАЯ" id="1" isActive={buttonIsActive} onClick={handleButtonIsActive}/>
        <NavButton buttonName="ГАЙДЫ" id="2" isActive={buttonIsActive} onClick={handleButtonIsActive}/>
        <NavButton buttonName="ТИРЛИСТЫ" id="3" isActive={buttonIsActive} onClick={handleButtonIsActive}/>
        <NavButton buttonName="РАНДОМАЙЗЕР" id="4" isActive={buttonIsActive} onClick={handleButtonIsActive}/>
      </nav>
      <MainPage/>
    </main>
  );
}

export default App;
