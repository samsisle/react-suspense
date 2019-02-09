import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./tabs.module.css";

export default function Tabs() {
  return (
    <div>
      <NavLink to="/smileys_people">😀</NavLink>
      <NavLink to="/animals_nature">🐻</NavLink>
      <NavLink to="/food_drink">🍔</NavLink>
      <NavLink to="/activity">⚽</NavLink>
      <NavLink to="/travel_places">🚘</NavLink>
      <NavLink to="/objects">💡</NavLink>
      <NavLink to="/symbols">🔣</NavLink>
    </div>
  );
}
