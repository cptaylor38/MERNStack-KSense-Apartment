import React, { useState, useContext } from "react";
import styles from "./otherform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import { OtherAreasGoodContext, OtherAreasNAContext } from "../../Store";

function OtherForm() {
  const [otherAreasCheckedGood, setOtherAreasCheckedGood] = useContext(
    OtherAreasGoodContext
  );
  const [otherAreasCheckedNA, setOtherAreasCheckedNA] = useContext(
    OtherAreasNAContext
  );

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
      <SectionHeader title="Other Areas Inspection" />
      <form className={styles["OtherFormWrapper"]} id="other-areas-form">
        {objects.map((object, index) => {
          return (
            <div className={styles["CheckboxWrapper"]}>
              <h5>{object}</h5>
              <Ratings
                parentCheckedGood={otherAreasCheckedGood}
                parentCheckedNA={otherAreasCheckedNA}
              />
            </div>
          );
        })}
      </form>
      <br />
      <ImageUploader title={"Other Areas"} />
    </div>
  );
}

export default OtherForm;
