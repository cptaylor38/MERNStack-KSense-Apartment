import React, { useState, useContext } from "react";
import SectionHeader from "../SectionHeader";
import styles from "./appliancesform.module.css";
import Ratings from "../Ratings";
import { ApplianceGoodContext, ApplianceNAContext } from "../../Store";
import ImageUploader from "../CommentsSection";

function AppliancesForm() {
  const [applianceCheckedGood, setApplianceCheckedGood] = useContext(
    ApplianceGoodContext
  );
  const [applianceCheckedNA, setApplianceCheckedNA] = useContext(
    ApplianceNAContext
  );
  const [objects, setObjects] = useState([
    "Stove",
    "Range Hood",
    "Refrigerator",
    "Dishwashe",
    "Microwave",
    "Washing Machine",
    "Dryer",
    "Other",
  ]);
  return (
    <div>
      <SectionHeader title="Appliances Inspection" />
      <form className={styles["AppliancesFormWrapper"]} id="appliances-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={applianceCheckedGood}
                parentCheckedNA={applianceCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Appliances"} />
    </div>
  );
}

export default AppliancesForm;
