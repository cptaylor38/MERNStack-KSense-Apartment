import React, { useState, useContext } from "react";
import styles from "./bedoneform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { BedroomOneGoodContext, BedroomOneNAContext } from "../../Store";

function BedOneForm() {
  const [bedroomOneCheckedGood, setBedroomOneCheckedGood] = useContext(
    BedroomOneGoodContext
  );
  const [bedroomOneCheckedNA, setBedroomOneCheckedNA] = useContext(
    BedroomOneNAContext
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
      <SectionHeader title="Bedroom #1 Inspection" />
      <form className={styles["BedroomOneFormWrapper"]} id="bedroom-one-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={bedroomOneCheckedGood}
                parentCheckedNA={bedroomOneCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Bedroom #1"} />
    </div>
  );
}

export default BedOneForm;
