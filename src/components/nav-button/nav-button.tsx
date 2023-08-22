import {FunctionComponent, useState} from 'react';

import appButtonStyles from './nav-button.module.css';
import {TNavButton} from '../../types/props';

export const NavButton: FunctionComponent<TNavButton> = (props) => {
  const [showSpan, setShowSpan] = useState<boolean>(false);

  return (
    <div>
      <button className={appButtonStyles.button}
      onClick={() => {
        setShowSpan(true)
      }}>
        <p className={appButtonStyles.textWrap}>
        {props.buttonName}
        </p>
      </button>
    </div>
  )
}