import React, { useState, useContext } from "react";
import styles from "./otherform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  OtherAreasGoodContext,
  OtherAreasNAContext,
  FormQuestionsContext,
} from "../../Store";

function OtherForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [otherAreasCheckedGood, setOtherAreasCheckedGood] = useContext(
    OtherAreasGoodContext
  );
  const [otherAreasCheckedNA, setOtherAreasCheckedNA] = useContext(
    OtherAreasNAContext
  );
  const array = formQuestions.other;
  const [objects, setObjects] = useState([
    "Entry Door(s)",
    "Furnace/Heater",
    "Air Conditioning",
    "Fireplace",
    "Balcony, Patio, Terrace",
    "Lawn, Ground Covering",
    "Garage or Parking Area",
    "Storage",
    "Water Heater",
    "Other",
  ]);
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Other Areas Inspection" name="other" />
          <div className={styles["OtherFormWrapper"]} id="other-areas-form">
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="other"
                    question={object}
                    parentCheckedGood={otherAreasCheckedGood}
                    parentCheckedNA={otherAreasCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="other" title={"Other Areas"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default OtherForm;
