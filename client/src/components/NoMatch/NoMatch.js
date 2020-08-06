import React from "react";
import { Jumbotron } from "reactstrap";
import styles from "./NoMatch.module.css";

function NoMatch() {
  return (
    <div className={styles["NoMatchWrapper"]}>
      <div className={styles["NoMatch"]}>
        <Jumbotron
          className={styles["NoMatchBox"]}
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
        </Jumbotron>
      </div>
    </div>
  );
}

export default NoMatch;
