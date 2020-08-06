import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import DocumentTitle from "react-document-title";
import MoveInForm from "./pages/MoveInForm";
import NoMatch from "./components/NoMatch";
import Store from "./Store";
import axios from "axios";

function App() {
  const [state, setState] = useState(false);

  //Title Case
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const renderMoveIn = (routerProps) => {
    const apartmentName = routerProps.match.params.apartment;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");
    axios
      .get(`http://localhost:5000/api/${apartmentName}`, headers)
      .then((res) => {
        let response = res.data[0].apartment;
        setState(response);
        return <MoveInForm apartment={apartmentName} />;
      })
      .catch((error) => {
        console.log(error);
      });
    const Apartment = apartmentName.toProperCase();
    return state ? <MoveInForm Apartment={Apartment} /> : <NoMatch />;
  };
  return (
    <DocumentTitle title="Move-In Inspection">
      <Store>
        <Router>
          <div className={styles["App"]}>
            <Switch>
              <Route
                path="/:apartment"
                render={(routerProps) => renderMoveIn(routerProps)}
              />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Store>
    </DocumentTitle>
  );
}

export default App;
