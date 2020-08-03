import React, { useState } from "react";
import styles from "./kitchenform.module.css";
import Ratings from "./Ratings";
import ImageUploader from "../ImageUploader/ImageUploader";

function KitchenForm() {
  const [checkGood, setCheckGood] = useState(false);
  const [checkNA, setCheckNA] = useState(false);
  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Counters",
    "Sink, Faucet",
    "Drain, Plumbing",
    "Garbage Disposal",
    "Light Fixture(s), Bulb(s)",
    "Light Switches, Outlets",
    "Door & Door Hardware",
    "Window(s) & Screens(s)",
    "Cabinets",
    "Other",
  ]);
  return (
    <div>
      <h1 className={styles["KitchenHeader"]}>Kitchen Inspection</h1>
      <button
        className={styles["KitchenMarkAll"]}
        onClick={() => setCheckGood(!checkGood)}
      >
        Mark all items as "Good" in this section
      </button>
      <br />
      <button
        className={styles["KitchenMarkAll"]}
        onClick={() => setCheckNA(!checkNA)}
      >
        Mark all items as "N/A" in this section
      </button>
      <form className={styles["KitchenFormWrapper"]} id="kitchen-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={checkGood}
                parentCheckedNA={checkNA}
              />
            </div>
          );
        })}
        {/* <hr className={styles["KitchenHR"]} /> */}
      </form>
      <br />
      <ImageUploader />
    </div>
  );
}

export default KitchenForm;
