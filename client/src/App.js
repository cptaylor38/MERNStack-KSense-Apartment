import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import DocumentTitle from "react-document-title";
import MoveInForm from "./pages/MoveInForm";
import NoMatch from "./components/NoMatch";
import Store, { EmailContext } from "./Store";
import axios from "axios";

function App() {
  const [logo, setLogo] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(false);

  //Title Case
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  //checking if client exists in DB
  const renderMoveIn = (routerProps) => {
    const apartmentName = routerProps.match.params.apartment.toLowerCase();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "*");
    axios
      .get(`api/${apartmentName}`, headers)
      .then((res) => {
        const response = res.data[0];
        setLogo(response.logo);
        setLink(response.link);
        setEmail(response.email);
        setState(true);
      })
      .catch((error) => {
        console.log(error);
      });
    const Apartment = apartmentName.toProperCase();
    return state ? (
      <MoveInForm Logo={logo} Link={link} Email={email} Apartment={Apartment} />
    ) : (
      <NoMatch />
    );
  };
  useEffect(() => {}, [state]);
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
