import {FunctionComponent, useState} from 'react';

import navButtonStyles from './nav-button.module.css';

import {TNavButton} from '../../types/props';

export const NavButton: FunctionComponent<TNavButton> = (props) => {
  return (
    <div className={navButtonStyles.buttonWrap}>
      <button id={props.id}
        className={navButtonStyles.button}
              onClick={props.onClick}>
        <p className={navButtonStyles.text}>
          {props.buttonName}
        </p>
      </button>
      {
        props.isActive === props.id &&
        <div id={props.id} className={navButtonStyles.shadowSpan}></div>
      }

    </div>
  )
}