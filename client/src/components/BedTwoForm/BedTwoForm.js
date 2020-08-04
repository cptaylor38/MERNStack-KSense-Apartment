import React, { useState, useContext } from "react";
import styles from "./bedtwoform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { BedroomTwoGoodContext, BedroomTwoNAContext } from "../../Store";

function BedTwoForm() {
  const [bedroomTwoCheckedGood, setBedroomTwoCheckedGood] = useContext(
    BedroomTwoGoodContext
  );
  const [bedroomTwoCheckedNA, setBedroomTwoCheckedNA] = useContext(
    BedroomTwoNAContext
  );

  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Light Switches, Outlets",
    "Light Fixture(s), Bulb(s)",
    "Closet Door(s)",
    "Door & Door Hardware",
    "Window(s) & Screen(s)",
    "Furniture (if any)",
    "Other",
  ]);
  return (
    <div>
      <SectionHeader title="Bedroom #2 Inspection" />
      <form className={styles["BedroomTwoFormWrapper"]} id="bedroom-two-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={bedroomTwoCheckedGood}
                parentCheckedNA={bedroomTwoCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Bedroom #2"} />
    </div>
  );
}

export default BedTwoForm;
