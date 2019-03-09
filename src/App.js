import React, { useState, Suspense, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Expire from "./components/expire/Expire";
import { Portal, Modal, Context } from "./components/modal";
import SearchBar from "./components/searchBar/SearchBar";
import Tabs from "./components/tabs/Tabs";
import {
  ResultsContainer,
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
  const [emojis, setEmojis] = useState([]);
  const [value, setValue] = useState("");

  const copyModal = (emoji, label) => setTest({ emoji, label });
  const redirect = () => <Redirect to="/smileys_people" />;
  const resultsHandler = results => setEmojis(results);
  const inputHandler = input => setValue(input);
  const clear = _ => {
    setTest(null);
    setEmojis([]);
    setValue([]);
  };

  return (
    <Fragment>
      <main className={styles.test}>
        <Banner />
        <Portal>
          {test && (
            <Expire delay={2000} setTest={setTest}>
              <Modal emoji={test} />
            </Expire>
          )}
        </Portal>
        <SearchBar
          results={resultsHandler}
          inputValue={inputHandler}
          value={value}
          setValue={setValue}
        />
        <Tabs clear={clear} />
        <Suspense
          fallback={<div className={styles.loading}>Loading Emojis...</div>}
        >
          <Context.Provider value={copyModal}>
            <Route exact path="/" render={redirect} />
            {emojis.length > 0 && value ? (
              <ResultsContainer emojis={emojis} />
            ) : null}
            <div
              style={{
                display: emojis.length > 0 && value ? "none" : "block",
                width: "100%"
              }}
            >
              <Route path="/smileys_people" component={SmileysPeople} />
              <Route path="/activity" component={Activity} />
              <Route path="/animals_nature" component={AnimalsNature} />
              <Route path="/food_drink" component={FoodDrink} />
              <Route path="/objects" component={Objects} />
              <Route path="/symbols" component={Symbols} />
              <Route path="/travel_places" component={TravelPlaces} />
            </div>
          </Context.Provider>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}
