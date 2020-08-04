import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import DocumentTitle from "react-document-title";
import Home from "./pages/Home";
import About from "./pages/About";
import MoveInForm from "./pages/MoveInForm";
import NoMatch from "./components/NoMatch";
import Store from "./Store";

function App() {
  return (
    <DocumentTitle title="Move-In Inspection">
      <Store>
        <Router>
          <div className={styles["App"]}>
            <Navigation />
            <Switch>
              <Route exact path="/contact" component={MoveInForm} />
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Store>
    </DocumentTitle>
  );
}

export default App;
