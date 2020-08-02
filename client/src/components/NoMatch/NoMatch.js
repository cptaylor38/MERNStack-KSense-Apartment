import React from "react";
import { Jumbotron } from 'reactstrap';
import styles from "./NoMatch.module.css";

function NoMatch() {
  return (
    <div>
      <div className={styles["No-Match"]}>
        <Jumbotron
          className={styles["No-Match-Box"]}
          bgcolor="text.secondary"
          color="primary.contrastText"
          p={2}
        >
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <a href="/">Go home</a>
        </Jumbotron>
      </div>
    </div>
  );
}

export default NoMatch;
