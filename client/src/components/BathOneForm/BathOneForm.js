import React, { useState, useContext } from "react";
import styles from "./bathoneform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { BathroomOneGoodContext, BathroomOneNAContext } from "../../Store";

function BathOneForm() {
  const [bathroomOneCheckedGood, setBathroomOneCheckedGood] = useContext(
    BathroomOneGoodContext
  );
  const [bathroomOneCheckedNA, setBathroomOneCheckedNA] = useContext(
    BathroomOneNAContext
  );

  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Counters",
    "Sink, Faucet",
    "Shower/Tub, Faucet",
    "Drains, Plumbing",
    "Shower Door",
    "Toilet, Seat",
    "Caulking",
    "Towel Rack(s)",
    "Medicine Cab/Mirror",
    "Exhaust Fan",
    "Cabinet/Linen Closet",
    "Light Fixture(s), Bulb(s)",
    "Light Switches, Outlets",
    "Linen Closet/Cabinet",
    "Door & Door Hardware",
    "Window(s) & Screen(s)",
    "Other",
  ]);
  return (
    <div>
      <SectionHeader title="Bathroom #1 Inspection" />
      <form className={styles["BathroomOneFormWrapper"]} id="bathroom-one-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={bathroomOneCheckedGood}
                parentCheckedNA={bathroomOneCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Bathroom #1"} />
    </div>
  );
}

export default BathOneForm;
