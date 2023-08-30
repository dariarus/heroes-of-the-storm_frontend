import {FunctionComponent, useState} from 'react';

import mainPageStyles from './main-page.module.css';

import {RoleCheckbox} from '../../components/role-checkbox/role-checkbox';
import {ComplexityCheckbox} from '../../components/complexity-checkbox/complexity-checkbox';
import {RotationShowingCheckbox} from '../../components/checkbox/checkbox';
import {mockHeroesData} from '../../utils/constants';
import {HeroCard} from '../../components/hero-card/hero-card';


export const MainPage: FunctionComponent = () => {
  // const [selectedCheckboxId, setSelectedCheckboxId] = useState<number | null>(null);
  const [selectedCheckbox, setSelectedCheckbox] = useState<boolean>(false);
  const [isRoleCheckboxActive, setIsRoleCheckboxActive] = useState<boolean>(true)
  const [isComplexityCheckboxActive, setIsComplexityCheckboxActive] = useState<boolean>(true)

  const handleSetActiveComplexityCheckbox = () => {
    setSelectedCheckbox(!selectedCheckbox);
    setIsComplexityCheckboxActive(false)
  }

  const handleSetActiveRoleCheckbox = () => {
    setSelectedCheckbox(!selectedCheckbox);
    setIsRoleCheckboxActive(false)
  }

  return (
    <div className={mainPageStyles.page}>
      <section className={mainPageStyles.sectionHeroes}>
        <article className={mainPageStyles.searchArea}>
          <div className={mainPageStyles.searchWrap}>
            <form className={mainPageStyles.searchHeroesForm}>
              <input placeholder="Поиск героя" className={mainPageStyles.searchHeroesInput}/>
            </form>
            <RotationShowingCheckbox label={["Показать", <a href="#"
                                                            rel="noreferrer"
                                                            target="_blank"
                                                            className={mainPageStyles.link}>бесплатную ротацию героев
            </a>]}/>
          </div>
          <div className={mainPageStyles.sortWrap}>
            <div className={mainPageStyles.sortDetailsWrap}>
              <p className={mainPageStyles.text}>Роль</p>
              <ul
                className={`${mainPageStyles.checkboxesList} ${mainPageStyles.checkboxesListOpacity} ${mainPageStyles.listFirstOfType}`}>
                <RoleCheckbox role="tank" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
                <RoleCheckbox role="bruiser" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
                <RoleCheckbox role="range" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
                <RoleCheckbox role="melee" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
                <RoleCheckbox role="healer" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
                <RoleCheckbox role="support" isActive={isRoleCheckboxActive} onChange={handleSetActiveRoleCheckbox}/>
              </ul>
            </div>
            <div className={mainPageStyles.sortDetailsWrap}>
              <ul
                className={`${mainPageStyles.checkboxesList} ${mainPageStyles.checkboxesListOpacity} ${mainPageStyles.listLastOfType}`}>
                <ComplexityCheckbox complexity="very easy" isActive={isComplexityCheckboxActive}
                                    onChange={handleSetActiveComplexityCheckbox}/>
                <ComplexityCheckbox complexity="easy" isActive={isComplexityCheckboxActive}
                                    onChange={handleSetActiveComplexityCheckbox}/>
                <ComplexityCheckbox complexity="medium" isActive={isComplexityCheckboxActive}
                                    onChange={handleSetActiveComplexityCheckbox}/>
                <ComplexityCheckbox complexity="hard" isActive={isComplexityCheckboxActive}
                                    onChange={handleSetActiveComplexityCheckbox}/>
                <ComplexityCheckbox complexity="very hard" isActive={isComplexityCheckboxActive}
                                    onChange={handleSetActiveComplexityCheckbox}/>
              </ul>
              <p className={mainPageStyles.text}>Сложность</p>
            </div>
          </div>
        </article>
        <article className={mainPageStyles.heroesArea}>
          {
            mockHeroesData.map((hero, index) => (
                <HeroCard name={hero.name} icon={hero.icon} image={hero.image}/>
              )
            )
          }
        </article>
      </section>
    </div>
  )
}