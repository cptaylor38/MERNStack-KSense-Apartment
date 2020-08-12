import React, { useState, useContext } from "react";
import styles from "./bedoneform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  BedroomOneGoodContext,
  BedroomOneNAContext,
  FormQuestionsContext,
} from "../../Store";

function BedOneForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [bedroomOneCheckedGood, setBedroomOneCheckedGood] = useContext(
    BedroomOneGoodContext
  );
  const [bedroomOneCheckedNA, setBedroomOneCheckedNA] = useContext(
    BedroomOneNAContext
  );
  const array = formQuestions.bedone;
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
          <SectionHeader title="Bedroom #1 Inspection" name="bedone" />
          <div
            className={styles["BedroomOneFormWrapper"]}
            id="bedroom-one-form"
          >
            {objects.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="bedone"
                    question={object}
                    parentCheckedGood={bedroomOneCheckedGood}
                    parentCheckedNA={bedroomOneCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="bedone" title={"Bedroom #1"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BedOneForm;
