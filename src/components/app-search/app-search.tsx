import {FunctionComponent} from 'react';

import searchStyles from './app-search.module.css';

export const AppSearch: FunctionComponent = () => {
  return (
    <form className={searchStyles.form}>
      <button></button>
      <input/>
    </form>
  )
}