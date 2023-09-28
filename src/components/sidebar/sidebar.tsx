import React, {FunctionComponent} from 'react';

import sidebarStyles from './sidebar.module.css';

import {mockSiteUpdates} from '../../utils/constants';

export const Sidebar: FunctionComponent = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <button className={sidebarStyles.enterButton}>
        ВОЙТИ
      </button>
      <div className={sidebarStyles.updates}>
        <h2 className={sidebarStyles.updatesHeading}>ОБНОВЛЕНИЯ НА САЙТЕ</h2>
        <ul className={sidebarStyles.updatesList}>
          {
            mockSiteUpdates.map(update => (
              <li className={sidebarStyles.updatesListItem}>
                <p className={sidebarStyles.text}>{update.date}:
                  <a href="#" className={sidebarStyles.updateLink}>{update.updateTheme}</a>
                </p>
                  <ul className={sidebarStyles.changeList}>
                    {
                      update.changes.map(change => (
                        <li className={sidebarStyles.changeListItem}>{change}</li>
                      ))
                    }
                  </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}