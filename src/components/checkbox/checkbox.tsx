import {FunctionComponent} from 'react';

import checkboxStyles from './checkbox.module.css';

import {TCheckbox} from '../../types/props';

export const Checkbox: FunctionComponent<TCheckbox> = (props) => {
  return (
    <label htmlFor="checkbox" className={checkboxStyles.checkboxLabel}>
      <input type="checkbox" id="checkbox" className={checkboxStyles.checkbox}/>
      {props.label}
    </label>
  )
}