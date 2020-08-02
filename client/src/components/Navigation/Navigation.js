import React from "react";
import styles from "./navigation.module.css";
import { Nav, Button } from "reactstrap";

function Navigation() {
  return (
    <div className={styles["Navigation"]}>
      <Nav className={styles["Navbar"]}>
        <Button className={styles["Links"]} href="/">
          Home
        </Button>
        <Button className={styles["Links"]} href="/about">
          About
        </Button>
        <Button className={styles["Links"]} href="/contact">
          Contact
        </Button>
      </Nav>
    </div>
  );
}

export default Navigation;
