import {FunctionComponent} from 'react';

import headerStyles from './header.module.css';

import {AppSearch} from '../app-search/app-search';
import {AppButton} from '../nav-button/app-button';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.heading}>HEROES OF THE STORM<br/><span className={headerStyles.span}>NEXUS CLUB</span></h1>
      <nav className={headerStyles.navWrap}>
        <AppSearch/>
          <AppButton buttonName="ВОЙТИ"/>
          <AppButton buttonName="ГЛАВНАЯ" buttonType="main"/>
          <AppButton buttonName="ГАЙДЫ" buttonType="guide"/>
          <AppButton buttonName="ТИР-ЛИСТЫ" buttonType="tier"/>
          <AppButton buttonName="РАНДОМАЙЗЕР" buttonType="randomizer"/>
      </nav>
    </header>
  )
}