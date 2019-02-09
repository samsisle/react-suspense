import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.container}>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/smileys_people"
      >
        😀
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/animals_nature"
      >
        🐻
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/food_drink"
      >
        🍔
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/activity"
      >
        ⚽
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/travel_places"
      >
        🚘
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/objects"
      >
        💡
      </NavLink>
      <NavLink
        activeClassName={styles.active}
        className={styles.tab}
        to="/symbols"
      >
        🔣
      </NavLink>
    </div>
  );
}
