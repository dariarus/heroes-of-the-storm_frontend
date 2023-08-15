import {FunctionComponent} from 'react';

import complexityButtonStyles from './complexity-button.module.css';

export const ComplexityButton: FunctionComponent<{complexity: string}> = (props) => {
  return (
    <li className={complexityButtonStyles.listItem}>
      <button type="button" className={
        props.complexity === 'very easy'
          ? `${complexityButtonStyles.button} ${complexityButtonStyles.buttonVeryEasy}`
          : props.complexity === 'easy'
            ? `${complexityButtonStyles.button} ${complexityButtonStyles.buttonEasy}`
            : props.complexity === 'medium'
              ? `${complexityButtonStyles.button} ${complexityButtonStyles.buttonMedium}`
              : props.complexity === 'hard'
                ? `${complexityButtonStyles.button} ${complexityButtonStyles.buttonHard}`
                  : `${complexityButtonStyles.button} ${complexityButtonStyles.buttonVeryHard}`
      }></button>
    </li>
  )
}