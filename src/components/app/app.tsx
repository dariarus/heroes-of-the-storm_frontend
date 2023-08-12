import React from 'react';
import appStyles from './app.module.css';
import {Header} from '../header/header';

function App() {
  return (
    <main className={appStyles.app}>
      <Header/>
    </main>
  );
}

export default App;
