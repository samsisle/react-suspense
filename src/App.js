import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import SearchBar from "./components/searchBar/SearchBar";
import styles from "./styles/App.module.css";

/* prettier-ignore */
const SmileysPeople = lazy(() => import("./components/smileys_people/SmileysPeople"));
/* prettier-ignore */
const Activity = lazy(() => import("./components/activity/Activity"));
/* prettier-ignore */
const AnimalsNature = lazy(() => import("./components/animals_nature/AnimalsNature"));
/* prettier-ignore */
const FoodDrink = lazy(() => import("./components/food_drink/FoodDrink"));
/* prettier-ignore */
const Objects = lazy(() => import("./components/objects/Objects"))
/* prettier-ignore */
const Symbols = lazy(() => import("./components/symbols/Symbols"))
/* prettier-ignore */
const TravelPlaces = lazy(() => import("./components/travel_places/TravelPlaces"))

export default function App() {
  return (
    <div className={styles.test}>
      <Banner />
      <SearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={SmileysPeople} />
        <Route path="/activity" component={Activity} />
        <Route path="/animals_nature" component={AnimalsNature} />
        <Route path="/food_drink" component={FoodDrink} />
        <Route path="/objects" component={Objects} />
        <Route path="/symbols" component={Symbols} />
        <Route path="/travel_places" component={TravelPlaces} />
      </Suspense>
    </div>
  );
}
