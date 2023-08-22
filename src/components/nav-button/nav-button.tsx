import {FunctionComponent} from 'react';

import appButtonStyles from './nav-button.module.css';
import {TNavButton} from '../../types/props';

export const NavButton: FunctionComponent<TNavButton> = (props) => {
  return (
    <button className={appButtonStyles.button}>
      <p className={appButtonStyles.textWrap}>
        {props.buttonName}
      </p>
    </button>
  )
}