import React, { useContext, useState } from "react";
import SectionHeader from "../SectionHeader";
import Ratings from "../Ratings";
import styles from "./livingroomform.module.css";
import ImageUploader from "../CommentsSection";
import {
  LivingRoomGoodContext,
  LivingRoomNAContext,
  FormQuestionsContext,
} from "../../Store";

function LivingRoomForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [livingRoomCheckedGood, setLivingRoomCheckedGood] = useContext(
    LivingRoomGoodContext
  );
  const [livingRoomCheckedNA, setLivingRoomCheckedNA] = useContext(
    LivingRoomNAContext
  );
  const array = formQuestions.living;
  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Light Fixture(s), Bulb(s)",
    "Light Switches, Outlets",
    "Closet Door(s)",
    "Door & Door Hardware",
    "Window(s) & Screens(s)",
    "Furniture (if any)",
    "Other",
  ]);
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Living Room Inspection" name="living" />
          <div
            className={styles["LivingRoomFormWrapper"]}
            id="living-room-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="living"
                    question={object}
                    parentCheckedGood={livingRoomCheckedGood}
                    parentCheckedNA={livingRoomCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="living" title={"Living Room"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LivingRoomForm;
