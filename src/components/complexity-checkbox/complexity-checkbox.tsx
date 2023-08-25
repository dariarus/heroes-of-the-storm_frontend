import {FunctionComponent} from 'react';

import complexityButtonStyles from './complexity-checkbox.module.css';

export const ComplexityCheckbox: FunctionComponent<{ complexity: string }> = (props) => {


  return (
    <li className={complexityButtonStyles.listItem}>
      <input type="checkbox" className=
        {(() => {
          let checkboxStyle = `${complexityButtonStyles.checkbox} `;
          switch (props.complexity) {
            case 'very easy':
              checkboxStyle = checkboxStyle + `${complexityButtonStyles.veryEasy}`;
              break;

            case 'easy':
              checkboxStyle = checkboxStyle + `${complexityButtonStyles.easy}`;
              break;

            case 'medium':
              checkboxStyle = checkboxStyle + `${complexityButtonStyles.medium}`;
              break;

            case 'hard':
              checkboxStyle = checkboxStyle + `${complexityButtonStyles.hard}`;
              break;

            case 'very hard':
              checkboxStyle = checkboxStyle + `${complexityButtonStyles.veryHard}`;
              break;
          }

          // switch (checked)

          return checkboxStyle;
        })()}>

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