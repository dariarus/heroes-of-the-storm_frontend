import {FunctionComponent} from 'react';

import checkboxStyles from './checkbox.module.css';

import {TShowRotationCheckbox} from '../../types/props';

export const RotationShowingCheckbox: FunctionComponent<TShowRotationCheckbox> = (props) => {
  return (
    <label htmlFor="checkbox" className={checkboxStyles.checkboxLabel}>
      <input type="checkbox" id="checkbox" className={checkboxStyles.checkbox}/>
      {props.label}
    </label>
  )
}