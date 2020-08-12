import React, { useState, useContext } from "react";
import SectionHeader from "../SectionHeader";
import styles from "./appliancesform.module.css";
import Ratings from "../Ratings";
import {
  ApplianceGoodContext,
  ApplianceNAContext,
  FormQuestionsContext,
} from "../../Store";
import ImageUploader from "../CommentsSection";

function AppliancesForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [applianceCheckedGood, setApplianceCheckedGood] = useContext(
    ApplianceGoodContext
  );
  const [applianceCheckedNA, setApplianceCheckedNA] = useContext(
    ApplianceNAContext
  );
  const array = formQuestions.appliances;
  const [objects, setObjects] = useState([
    "Stove",
    "Range Hood",
    "Refrigerator",
    "Dishwasher",
    "Microwave",
    "Washing Machine",
    "Dryer",
    "Other",
  ]);
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Appliances Inspection" name="appliances" />
          <div className={styles["AppliancesFormWrapper"]} id="appliances-form">
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="appliances"
                    question={object}
                    parentCheckedGood={applianceCheckedGood}
                    parentCheckedNA={applianceCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="appliances" title={"Appliances"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AppliancesForm;
