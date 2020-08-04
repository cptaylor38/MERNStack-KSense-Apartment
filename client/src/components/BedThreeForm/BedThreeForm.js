import React, { useState, useContext } from "react";
import styles from "./bedthreeform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { BedroomThreeGoodContext, BedroomThreeNAContext } from "../../Store";

function BedThreeForm() {
  const [bedroomThreeCheckedGood, setBedroomThreeCheckedGood] = useContext(
    BedroomThreeGoodContext
  );
  const [bedroomThreeCheckedNA, setBedroomThreeCheckedNA] = useContext(
    BedroomThreeNAContext
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
      <SectionHeader title="Bedroom #3 Inspection" />
      <form
        className={styles["BedroomThreeFormWrapper"]}
        id="bedroom-three-form"
      >
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={bedroomThreeCheckedGood}
                parentCheckedNA={bedroomThreeCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Bedroom #3"} />
    </div>
  );
}

export default BedThreeForm;
