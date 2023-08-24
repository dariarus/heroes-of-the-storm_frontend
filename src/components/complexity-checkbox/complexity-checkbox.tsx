import {FunctionComponent} from 'react';

import complexityButtonStyles from './complexity-checkbox.module.css';

export const ComplexityCheckbox: FunctionComponent<{complexity: string}> = (props) => {
  return (
    <li className={complexityButtonStyles.listItem}>
      <input type="checkbox" className={
        props.complexity === 'very easy'
          ? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.veryEasy}`
          : props.complexity === 'easy'
            ? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.easy}`
            : props.complexity === 'medium'
              ? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.medium}`
              : props.complexity === 'hard'
                ? `${complexityButtonStyles.checkbox} ${complexityButtonStyles.hard}`
                  : `${complexityButtonStyles.checkbox} ${complexityButtonStyles.veryHard}`
      }></input>
    </li>
  )
}