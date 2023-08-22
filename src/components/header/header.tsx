import {FunctionComponent} from 'react';

import headerStyles from './header.module.css';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
        <div className={headerStyles.headingWrap}>
          <h1 className={headerStyles.heading}>NEXUS CLUB</h1>
        </div>
      <p className={headerStyles.text}>
        ВСЕ 90 ГЕРОЕВ HEROES OF THE STORM, ГАЙДЫ, БИЛДЫ И МНОГОЕ ДРУГОЕ У ТЕБЯ ПОД РУКОЙ!
      </p>
    </header>
  )
}