import {FunctionComponent} from 'react';

import heroCardStyles from './hero-card.module.css';

import {THeroCard} from '../../types/props';

export const HeroCard: FunctionComponent<THeroCard> = (props) => {
  const turnToUppercase = (string: string) => {
    return string.toUpperCase();
  }

  const nameInUpperCase = turnToUppercase(props.name);

  return (
    <div className={heroCardStyles.card}>
      <div className={heroCardStyles.iconWrap}>
        <img src={props.icon} alt="Роль и сложность" className={heroCardStyles.icon}/>
      </div>
      <img src={props.image} alt="Изображение героя" className={heroCardStyles.image}/>
      <p className={heroCardStyles.text}>{nameInUpperCase}</p>
    </div>
  )
}