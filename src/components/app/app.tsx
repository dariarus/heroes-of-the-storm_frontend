import React from 'react';
import appStyles from './app.module.css';
import {Header} from '../header/header';
import {MainPage} from '../../pages/main-page/main-page';

function App() {
  return (
    <main className={appStyles.app}>
      <Header/>
      <MainPage/>
    </main>
  );
}

export default App;
