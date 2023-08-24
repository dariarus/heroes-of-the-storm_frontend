import {FunctionComponent} from 'react';

import roleButtonStyles from './role-checkbox.module.css';

export const RoleCheckbox: FunctionComponent<{ role: string }> = (props) => {
  return (
    <li className={roleButtonStyles.listItem}>
      <button type="button" className={
        props.role === 'tank'
          ? `${roleButtonStyles.button} ${roleButtonStyles.buttonTank}`
          : props.role === 'bruiser'
            ? `${roleButtonStyles.button} ${roleButtonStyles.buttonBruiser}`
            : props.role === 'range'
              ? `${roleButtonStyles.button} ${roleButtonStyles.buttonRangeAssassin}`
              : props.role === 'melee'
                ? `${roleButtonStyles.button} ${roleButtonStyles.buttonMeleeAssassin}`
                : props.role === 'healer'
                  ? `${roleButtonStyles.button} ${roleButtonStyles.buttonHealer}`
                  : `${roleButtonStyles.button} ${roleButtonStyles.buttonSupport}`
      }></button>
    </li>
  )
}