import React, {
  useState,
  useContext,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import styles from "./kitchenform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  KitchenGoodContext,
  KitchenNAContext,
  FormQuestionsContext,
} from "../../Store";

function KitchenForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [kitchenCheckedGood, setKitchenCheckedGood] = useContext(
    KitchenGoodContext
  );
  const [kitchenCheckedNA, setKitchenCheckedNA] = useContext(KitchenNAContext);

  const [objects, setObjects] = useState([
    "Walls and Ceilings",
    "Floor/Floor Covering",
    "Counters",
    "Sink, Faucet",
    "Drain, Plumbing",
    "Garbage Disposal",
    "Light Fixture(s), Bulb(s)",
    "Light Switches, Outlets",
    "Door & Door Hardware",
    "Window(s) & Screens(s)",
    "Cabinets",
    "Other",
  ]);
  const array = formQuestions.kitchen;
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Kitchen Inspection" name="kitchen" />
          <div className={styles["KitchenFormWrapper"]} id="kitchen-form">
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="kitchen"
                    question={object}
                    parentCheckedGood={kitchenCheckedGood}
                    parentCheckedNA={kitchenCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="kitchen" title={"Kitchen"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default KitchenForm;
