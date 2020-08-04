import React, { useState, useContext } from "react";
import styles from "./bathtwoform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { BathroomTwoGoodContext, BathroomTwoNAContext } from "../../Store";

function BathTwoForm() {
  const [bathroomTwoCheckedGood, setBathroomTwoCheckedGood] = useContext(
    BathroomTwoGoodContext
  );
  const [bathroomTwoCheckedNA, setBathroomTwoCheckedNA] = useContext(
    BathroomTwoNAContext
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
      <SectionHeader title="Bathroom #2 Inspection" />
      <form className={styles["BathroomTwoFormWrapper"]} id="bathroom-two-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={bathroomTwoCheckedGood}
                parentCheckedNA={bathroomTwoCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Bathroom #2"} />
    </div>
  );
}

export default BathTwoForm;
