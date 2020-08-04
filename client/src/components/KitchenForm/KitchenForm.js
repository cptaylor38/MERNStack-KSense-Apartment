import React, { useState, useContext } from "react";
import styles from "./kitchenform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { KitchenGoodContext, KitchenNAContext } from "../../Store";

function KitchenForm() {
  const [kitchenCheckedGood, setKitchenCheckedGood] = useContext(
    KitchenGoodContext
  );
  const [kitchenCheckedNA, setKitchenCheckedNA] = useContext(KitchenNAContext);

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
      <SectionHeader title="Kitchen Inspection" />
      <form className={styles["KitchenFormWrapper"]} id="kitchen-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={kitchenCheckedGood}
                parentCheckedNA={kitchenCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Kitchen"} />
    </div>
  );
}

export default KitchenForm;
