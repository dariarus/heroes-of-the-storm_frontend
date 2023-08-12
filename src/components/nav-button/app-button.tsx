import {FunctionComponent} from 'react';

import appButtonStyles from './app-button.module.css';
import {ButtonType, TButton} from '../../types/props';

export const AppButton: FunctionComponent<TButton> = (props) => {
  return (
    <button className={props.buttonName === 'ВОЙТИ'
      ? `${appButtonStyles.button} ${appButtonStyles.buttonSearch}`
      : props.buttonType === ButtonType.MAIN
        ? `${appButtonStyles.button} ${appButtonStyles.mainPageButton}`
        : props.buttonType === ButtonType.GUIDE
          ? `${appButtonStyles.button} ${appButtonStyles.guidesPageButton}`
          : props.buttonType === ButtonType.TIER
            ? `${appButtonStyles.button} ${appButtonStyles.tierSheetsPageButton}`
            : `${appButtonStyles.button} ${appButtonStyles.randomizerPageButton}`}>
      {props.buttonName}
    </button>
  )
}