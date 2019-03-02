import React, { useState, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Expire from "./components/expire/Expire";
import { Portal, Modal, Context } from "./components/modal";
import SearchBar from "./components/searchBar/SearchBar";
import Tabs from "./components/tabs/Tabs";
import {
  SmileysPeople,
  Activity,
  AnimalsNature,
  FoodDrink,
  Objects,
  Symbols,
  TravelPlaces
} from "./services/lazyImports";
import Footer from "./components/footer/Footer";
import styles from "./styles/App.module.css";

export default function App() {
  const [test, setTest] = useState(null);

  const copyModal = (emoji, label) => setTest({ emoji, label });
  const redirect = () => <Redirect to="/smileys_people" />;

  return (
    <div className={styles.test}>
      <Banner />
      <Portal>
        {test && (
          <Expire delay={2000}>
            <Modal emoji={test} />
          </Expire>
        )}
      </Portal>
      <SearchBar />
      <Tabs />
      <Suspense
        fallback={<div className={styles.loading}>Loading Emojis...</div>}
      >
        <Context.Provider value={copyModal}>
          <Route exact path="/" render={redirect} />
          <Route path="/smileys_people" component={SmileysPeople} />
          <Route path="/activity" component={Activity} />
          <Route path="/animals_nature" component={AnimalsNature} />
          <Route path="/food_drink" component={FoodDrink} />
          <Route path="/objects" component={Objects} />
          <Route path="/symbols" component={Symbols} />
          <Route path="/travel_places" component={TravelPlaces} />
        </Context.Provider>
      </Suspense>
      <Footer />
    </div>
  );
}
