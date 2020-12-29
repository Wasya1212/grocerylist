import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./parts/Header";
import Footer from "./parts/Footer";

import {
  Home,
  GroceryList,
  GroceryView
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/grocery">
            <GroceryView />
          </Route>
          <Route path="/list">
            <GroceryList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
