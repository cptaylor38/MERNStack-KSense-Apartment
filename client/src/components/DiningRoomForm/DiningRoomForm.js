import React, { useState, useContext } from "react";
import styles from "./diningroomform.module.css";
import SectionHeader from "../SectionHeader";
import ImageUploader from "../CommentsSection";
import Ratings from "../Ratings";
import { DiningRoomNAContext, DiningRoomGoodContext } from "../../Store";

function DiningRoomForm() {
  const [diningRoomCheckedGood, setDiningRoomCheckedGood] = useContext(
    DiningRoomGoodContext
  );
  const [diningRoomCheckedNA, setDiningRoomCheckedNA] = useContext(
    DiningRoomNAContext
  );
  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Light Switches, Outlets",
    "Light Fixture(s), Bulb(s)",
    "Door & Door Hardware",
    "Window(s) & Screen(s)",
    "Furniture (if any)",
    "Other",
  ]);
  return (
    <div>
      <SectionHeader title="Dining Room Inspection" />
      <form className={styles["DiningRoomFormWrapper"]} id="dining-room-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={diningRoomCheckedGood}
                parentCheckedNA={diningRoomCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Dining Room"} />
    </div>
  );
}

export default DiningRoomForm;
