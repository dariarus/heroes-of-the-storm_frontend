import {FunctionComponent} from 'react';

import roleButtonStyles from './role-checkbox.module.css';

import {TRoleCheckbox} from '../../types/props';

export const RoleCheckbox: FunctionComponent<TRoleCheckbox> = (props) => {
  return (
    <li className={roleButtonStyles.listItem}>
      <input type="checkbox" className={
        (() => {
          let checkboxCompleteStyle;
          let checkboxStyle = `${roleButtonStyles.checkbox} `;
          let checkboxStyleActive = `${roleButtonStyles.checkboxActive} `;
          let checkboxStyleInactive = `${roleButtonStyles.checkboxInactive} `;

          if (props.isActive) {
            checkboxStyle = checkboxStyle + checkboxStyleActive;
          } else {
            checkboxStyle = checkboxStyle + checkboxStyleInactive;
          }

          switch (props.role) {
            case 'tank':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.tank}`;
              break;

            case 'bruiser':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.bruiser}`;
              break;

            case 'range':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.rangeAssassin}`;
              break;

            case 'melee':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.meleeAssassin}`;
              break;

            case 'healer':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.healer}`;
              break;

            case 'support':
              checkboxCompleteStyle = checkboxStyle + `${roleButtonStyles.support}`;
              break;
          }
          return checkboxCompleteStyle;
        })()}
             onChange={props.onChange}>
      </input>
    </li>
  )
}