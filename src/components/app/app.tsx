import React from 'react';
import appStyles from './app.module.css';
import {Header} from '../header/header';
import {MainPage} from '../../pages/main-page/main-page';
import {NavButton} from '../nav-button/nav-button';

function App() {
  return (
    <main className={appStyles.app}>
      <Header/>
      <nav className={appStyles.nav}>
        <NavButton buttonName="ГЛАВНАЯ"/>
        <NavButton buttonName="ГАЙДЫ"/>
        <NavButton buttonName="ТИРЛИСТЫ"/>
        <NavButton buttonName="РАНДОМАЙЗЕР"/>
      </nav>
      {/*<MainPage/>*/}
    </main>
  );
}

export default App;
