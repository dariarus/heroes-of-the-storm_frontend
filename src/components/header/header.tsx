import {FunctionComponent} from 'react';

import headerStyles from './header.module.css';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      {/*<div className={headerStyles.headerWrap}>*/}
        <div className={headerStyles.headingWrap}>
          <h1 className={headerStyles.heading}>NEXUS CLUB</h1>
        </div>
      {/*</div>*/}
    </header>
  )
}