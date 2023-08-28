import {FunctionComponent, useState} from 'react';

import complexityButtonStyles from './complexity-checkbox.module.css';
import {TComplexityCheckbox} from '../../types/props';

export const ComplexityCheckbox: FunctionComponent<TComplexityCheckbox> = (props) => {
  return (
    <li className={complexityButtonStyles.listItem}>
      <input type="checkbox" className=
        {(() => {
          let checkboxCompleteStyle;
          let checkboxStyle = `${complexityButtonStyles.checkbox} `;
          let checkboxStyleActive = `${complexityButtonStyles.checkboxActive} `;
          let checkboxStyleInactive = `${complexityButtonStyles.checkboxInactive} `;

          if (props.isActive) {
            checkboxStyle = checkboxStyle + checkboxStyleActive;
          } else {
            checkboxStyle = checkboxStyle + checkboxStyleInactive;
          }

          switch (props.complexity) {
            case 'very easy':
              checkboxCompleteStyle = checkboxStyle + `${complexityButtonStyles.veryEasy}`;
              break;

            case 'easy':
              checkboxCompleteStyle = checkboxStyle + `${complexityButtonStyles.easy}`;
              break;

            case 'medium':
              checkboxCompleteStyle = checkboxStyle + `${complexityButtonStyles.medium}`;
              break;

            case 'hard':
              checkboxCompleteStyle = checkboxStyle + `${complexityButtonStyles.hard}`;
              break;

            case 'very hard':
              checkboxCompleteStyle = checkboxStyle + `${complexityButtonStyles.veryHard}`;
              break;
          }

          return checkboxCompleteStyle;
        })()}
             onChange={props.onChange}>

        {/*       props.complexity=== 'very easy'*/}
        {/*? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.veryEasy}`*/}
        {/*: props.complexity === 'easy'*/}
        {/*? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.easy}`*/}
        {/*: props.complexity === 'medium'*/}
        {/*? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.medium}`*/}
        {/*: props.complexity === 'hard'*/}
        {/*? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.hard}`*/}
        {/*: `${complexityButtonStyles.checkbox} ${complexityButtonStyles.veryHard}`*/}
        {/*}>*/}
      </input>
    </li>
  )
}