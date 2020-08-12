import React, { useState, useContext } from "react";
import styles from "./bedthreeform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  BedroomThreeGoodContext,
  BedroomThreeNAContext,
  FormQuestionsContext,
} from "../../Store";

function BedThreeForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
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
  const array = formQuestions.bedthree;
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Bedroom #3 Inspection" name="bedthree" />
          <div
            className={styles["BedroomThreeFormWrapper"]}
            id="bedroom-three-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="bedthree"
                    question={object}
                    parentCheckedGood={bedroomThreeCheckedGood}
                    parentCheckedNA={bedroomThreeCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="bedthree" title={"Bedroom #3"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BedThreeForm;
