import React from "react";
import Image from "../components/Image";
import { Button } from "reactstrap";
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className={styles["Home"]}>
      <Image
        Source="https://cdn.pixabay.com/photo/2014/12/16/16/19/smartphone-570507__340.jpg"
        Title="Checklist"
      />
      <div className={styles["HomeContent"]}>
        <h2 className={styles["Header"]}>WELCOME TO THE NEW MOVE IN FORM!</h2>
        <h4 className={styles["Tagline"]}>
          Next Up… Complete your move-in inspection checklist.
        </h4>
        <Button href="/contact" className={styles["HomeButton"]}>
          Start here
        </Button>
        <img
          className={styles["HomeCheckmark"]}
          src="https://moveininspection.com/wp-content/uploads/2020/05/Screenshot_6-98x108.png"
          alt="Checkmark"
        />
      </div>
      <Image
        Source="https://cdn.pixabay.com/photo/2018/08/01/22/22/graphic-3578346__340.png"
        Title="Happy Couple"
      />
    </div>
  );
}

export default Home;
