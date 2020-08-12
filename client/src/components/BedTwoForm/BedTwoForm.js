import React, { useState, useContext } from "react";
import styles from "./bedtwoform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  BedroomTwoGoodContext,
  BedroomTwoNAContext,
  FormQuestionsContext,
} from "../../Store";

function BedTwoForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [bedroomTwoCheckedGood, setBedroomTwoCheckedGood] = useContext(
    BedroomTwoGoodContext
  );
  const [bedroomTwoCheckedNA, setBedroomTwoCheckedNA] = useContext(
    BedroomTwoNAContext
  );
  const array = formQuestions.bedtwo;
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
      {array ? (
        <div>
          <SectionHeader title="Bedroom #2 Inspection" name="bedtwo" />
          <div
            className={styles["BedroomTwoFormWrapper"]}
            id="bedroom-two-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="bedtwo"
                    question={object}
                    parentCheckedGood={bedroomTwoCheckedGood}
                    parentCheckedNA={bedroomTwoCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="bedtwo" title={"Bedroom #2"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BedTwoForm;
