import React, { useState, useContext, useEffect } from "react";
import styles from "./bathoneform.module.css";
import Ratings from "../Ratings";
import ImageUploader from "../CommentsSection/CommentsSection";
import SectionHeader from "../SectionHeader";
import {
  BathroomOneGoodContext,
  BathroomOneNAContext,
  FormQuestionsContext,
} from "../../Store";

function BathOneForm() {
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);

  const [bathroomOneCheckedGood, setBathroomOneCheckedGood] = useContext(
    BathroomOneGoodContext
  );
  const [bathroomOneCheckedNA, setBathroomOneCheckedNA] = useContext(
    BathroomOneNAContext
  );
  const array = formQuestions.bathone;
  return (
    <div>
      {array ? (
        <div>
          <SectionHeader title="Bathroom #1 Inspection" name="bathone" />
          <div
            className={styles["BathroomOneFormWrapper"]}
            id="bathroom-one-form"
          >
            {array.map((object, index) => {
              return (
                <div className={styles["CheckboxWrapper"]} key={index}>
                  <h5>{object}</h5>
                  <Ratings
                    section="bathone"
                    question={object}
                    parentCheckedGood={bathroomOneCheckedGood}
                    parentCheckedNA={bathroomOneCheckedNA}
                  />
                </div>
              );
            })}
          </div>
          <br />
          <ImageUploader name="bathone" title={"Bathroom #1"} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BathOneForm;
