import {FunctionComponent} from 'react';

import mainPageStyles from './main-page.module.css';
import {RoleButton} from '../../components/role-button/role-button';
import {ComplexityButton} from '../../components/complexity-button/complexity-button';

export const MainPage: FunctionComponent = () => {
  return (
    <section>
      <h2 className={mainPageStyles.heading}>ВСЕ 90 ГЕРОЕВ HEROES OF THE STORM, ГАЙДЫ, БИЛДЫ И МНОГОЕ ДРУГОЕ У ТЕБЯ ПОД
        РУКОЙ</h2>
      <article className={mainPageStyles.searchArea}>
        <div className={mainPageStyles.searchWrap}>
          <form className={mainPageStyles.searchHeroesForm}>
            <input placeholder="Поиск героя" className={mainPageStyles.searchHeroesInput}/>
          </form>
          <p className={mainPageStyles.text}>Роль:</p>
          <ul className={mainPageStyles.buttonsList}>
            <RoleButton role="tank"/>
            <RoleButton role="bruiser"/>
            <RoleButton role="range"/>
            <RoleButton role="melee"/>
            <RoleButton role="healer"/>
            <RoleButton role="support"/>
          </ul>
          <p className={mainPageStyles.text}>Сложность:</p>
          <ul className={mainPageStyles.buttonsList}>
            <ComplexityButton complexity="very easy"/>
            <ComplexityButton complexity="easy"/>
            <ComplexityButton complexity="medium"/>
            <ComplexityButton complexity="hard"/>
            <ComplexityButton complexity="very hard"/>
          </ul>
        </div>
        {/*<div className={mainPageStyles.checkboxWrap}>*/}
          <label htmlFor="checkbox" className={mainPageStyles.checkboxLabel}>
            <input type="checkbox" id="checkbox" className={mainPageStyles.checkbox}/>
            Показать только героев в <a href="#" target="_blank" className={mainPageStyles.link}>бесплатной ротации</a>
          </label>
        {/*</div>*/}
      </article>
    </section>
  )
}