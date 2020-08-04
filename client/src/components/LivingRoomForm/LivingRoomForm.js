import React, { useContext, useState } from "react";
import SectionHeader from "../SectionHeader";
import Ratings from "../Ratings";
import styles from "./livingroomform.module.css";
import ImageUploader from "../CommentsSection";
import { LivingRoomGoodContext, LivingRoomNAContext } from "../../Store";

function LivingRoomForm() {
  const [livingRoomCheckedGood, setLivingRoomCheckedGood] = useContext(
    LivingRoomGoodContext
  );
  const [livingRoomCheckedNA, setLivingRoomCheckedNA] = useContext(
    LivingRoomNAContext
  );
  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Light Fixture(s), Bulb(s)",
    "Light Switches, Outlets",
    "Closet Door(s)",
    "Door & Door Hardware",
    "Window(s) & Screens(s)",
    "Furniture (if any)",
    "Other",
  ]);
  return (
    <div>
      <SectionHeader title="Living Room Inspection" />
      <form className={styles["LivingRoomFormWrapper"]} id="living-room-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={livingRoomCheckedGood}
                parentCheckedNA={livingRoomCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Living Room"} />
    </div>
  );
}

export default LivingRoomForm;
