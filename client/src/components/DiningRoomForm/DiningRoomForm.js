import React, { useState, useContext } from "react";
import styles from "./diningroomform.module.css";
import SectionHeader from "../SectionHeader";
import ImageUploader from "../CommentsSection";
import Ratings from "../Ratings";
import {
  DiningRoomNAContext,
  DiningRoomGoodContext,
  FormQuestionsContext,
} from "../../Store";

function DiningRoomForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [diningRoomCheckedGood, setDiningRoomCheckedGood] = useContext(
    DiningRoomGoodContext
  );
  const [diningRoomCheckedNA, setDiningRoomCheckedNA] = useContext(
    DiningRoomNAContext
  );

  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Light Switches, Outlets",
    "Light Fixture(s), Bulb(s)",
    "Door & Door Hardware",
    "Window(s) & Screen(s)",
    "Furniture (if any)",
    "Other",
  ]);
  const array = formQuestions.dining;
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Dining Room Inspection" name="dining" />
          <div
            className={styles["DiningRoomFormWrapper"]}
            id="dining-room-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="dining"
                    question={object}
                    parentCheckedGood={diningRoomCheckedGood}
                    parentCheckedNA={diningRoomCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="dining" title={"Dining Room"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default DiningRoomForm;
