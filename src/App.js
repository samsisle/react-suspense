import React from "react";

import SmileysPeople from "./components/smileys_people/SmileysPeople";
import Activity from "./components/activity/Activity";
import AnimalsNature from "./components/animals_nature/AnimalsNature";
import FoodDrink from "./components/food_drink/FoodDrink";
import Objects from "./components/objects/Objects";
import Symbols from "./components/symbols/Symbols";
import TravelPlaces from "./components/travel_places/TravelPlaces";

import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.test}>
      <SmileysPeople />
      <Activity />
      <AnimalsNature />
      <FoodDrink />
      <Objects />
      <Symbols />
      <TravelPlaces />
    </div>
  );
}
