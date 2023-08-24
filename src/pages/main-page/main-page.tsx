import {FunctionComponent} from 'react';

import mainPageStyles from './main-page.module.css';
import {RoleCheckbox} from '../../components/role-checkbox/role-checkbox';
import {ComplexityCheckbox} from '../../components/complexity-checkbox/complexity-checkbox';
import {Checkbox} from '../../components/checkbox/checkbox';

export const MainPage: FunctionComponent = () => {
  return (
    <div className={mainPageStyles.page}>
      <section className={mainPageStyles.sectionHeroes}>
        <article className={mainPageStyles.searchArea}>
          <div className={mainPageStyles.searchWrap}>
            <form className={mainPageStyles.searchHeroesForm}>
              <input placeholder="Поиск героя" className={mainPageStyles.searchHeroesInput}/>
            </form>
            <Checkbox label={["Показать", <a href="#"
                                             rel="noreferrer"
                                             target="_blank"
                                             className={mainPageStyles.link}>бесплатную ротацию героев
            </a>]}/>
          </div>
          <div className={mainPageStyles.sortWrap}>
            <div className={mainPageStyles.sortDetailsWrap}>
              <p className={mainPageStyles.text}>Роль</p>
              <ul className={mainPageStyles.buttonsList}>
                <RoleCheckbox role="tank"/>
                <RoleCheckbox role="bruiser"/>
                <RoleCheckbox role="range"/>
                <RoleCheckbox role="melee"/>
                <RoleCheckbox role="healer"/>
                <RoleCheckbox role="support"/>
              </ul>
            </div>
            <div className={mainPageStyles.sortDetailsWrap}>
              <ul className={`${mainPageStyles.buttonsList} ${mainPageStyles.listLastOfType}`}>
                <ComplexityCheckbox complexity="very easy"/>
                <ComplexityCheckbox complexity="easy"/>
                <ComplexityCheckbox complexity="medium"/>
                <ComplexityCheckbox complexity="hard"/>
                <ComplexityCheckbox complexity="very hard"/>
              </ul>
              <p className={mainPageStyles.text}>Сложность</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}