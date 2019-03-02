import React, { Component, Suspense } from "react";
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

export default class App extends Component {
  state = { test: null };

  copyModal = (emoji, label) => {
    this.setState({ test: { emoji, label } });
  };

  redirect = () => <Redirect to="/smileys_people" />;

  render() {
    return (
      <div className={styles.test}>
        <Banner />
        <Portal>
          {this.state.test && (
            <Expire delay={2000}>
              <Modal emoji={this.state.test} />
            </Expire>
          )}
        </Portal>
        <SearchBar />
        <Tabs />
        <Suspense
          fallback={<div className={styles.loading}>Loading Emojis...</div>}
        >
          <Context.Provider value={this.copyModal}>
            <Route exact path="/" render={this.redirect} />
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
}
