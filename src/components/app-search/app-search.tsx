import {FunctionComponent} from 'react';

import searchStyles from './app-search.module.css';

export const AppSearch: FunctionComponent = () => {
  return (
    <form className={searchStyles.form}>
      <button type="submit" className={searchStyles.searchButton}></button>
      <input placeholder="Поиск..." className={searchStyles.input}/>
    </form>
  )
}