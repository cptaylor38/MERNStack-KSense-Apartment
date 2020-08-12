import React, { useState, useContext } from "react";
import styles from "./bathtwoform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  BathroomTwoGoodContext,
  BathroomTwoNAContext,
  FormQuestionsContext,
} from "../../Store";

function BathTwoForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [bathroomTwoCheckedGood, setBathroomTwoCheckedGood] = useContext(
    BathroomTwoGoodContext
  );
  const [bathroomTwoCheckedNA, setBathroomTwoCheckedNA] = useContext(
    BathroomTwoNAContext
  );
  const array = formQuestions.bathtwo;
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
      {array ? (
        <div>
          <SectionHeader title="Bathroom #2 Inspection" name="bathtwo" />
          <div
            className={styles["BathroomTwoFormWrapper"]}
            id="bathroom-two-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="bathtwo"
                    question={object}
                    parentCheckedGood={bathroomTwoCheckedGood}
                    parentCheckedNA={bathroomTwoCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="bathtwo" title={"Bathroom #2"} />{" "}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BathTwoForm;
