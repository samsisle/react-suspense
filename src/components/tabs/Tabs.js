import React from "react";
import { NavLink } from "react-router-dom";

import { images } from "../../__data__/tabImages";
import { tabs } from "../../__data__/tabs";
import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {tabs.map((tab, i) => {
          return (
            <NavLink
              key={tab.alt + i}
              activeClassName={styles.active}
              className={styles.tab}
              to={tab.route}
            >
              <img className="tab-img" src={images[i]} alt={tab.alt} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
