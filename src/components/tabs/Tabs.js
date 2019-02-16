import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./tabs.module.css";

const images = [
  require("../../assets/svgs/" + "1f600" + ".svg"),
  require("../../assets/svgs/" + "1f43b" + ".svg"),
  require("../../assets/svgs/" + "1f354" + ".svg"),
  require("../../assets/svgs/" + "26bd" + ".svg"),
  require("../../assets/svgs/" + "1f698" + ".svg"),
  require("../../assets/svgs/" + "1f4a1" + ".svg"),
  require("../../assets/svgs/" + "1f523" + ".svg")
];

const tabs = [
  { route: "/smileys_people", alt: "grinning face" },
  { route: "/animals_nature", alt: "bear face" },
  { route: "/food_drink", alt: "hamburger" },
  { route: "/activity", alt: "soccer ball" },
  { route: "/travel_places", alt: "oncoming automobile" },
  { route: "/objects", alt: "electric light bulb" },
  { route: "/symbols", alt: "input symbol for symbols" }
];

export default function Tabs() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {tabs.map((tab, i) => {
          return (
            <NavLink
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
