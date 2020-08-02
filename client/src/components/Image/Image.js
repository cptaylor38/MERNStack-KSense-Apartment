import React from "react";
import styles from "./image.module.css";

function Image(props) {
  return (
    <div className={styles["ImagesWrapper"]}>
      <img
        className={styles["HomeImages"]}
        src={props.Source}
        alt={props.Title}
      />
    </div>
  );
}

export default Image;
