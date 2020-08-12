import React, { useState, useCallback, useContext, useEffect } from "react";
import { FormGroup, CustomInput } from "reactstrap";
import UniqueString from "unique-string";
import { FormAnswersContext } from "../../Store";

function Ratings({ parentCheckedGood, parentCheckedNA, question, section }) {
  const [formAnswers, setFormAnswers] = useContext(FormAnswersContext);
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormAnswers((state) => ({
        ...state,
        [section]: { ...state[section], [name]: value },
      }));
    },
    [section, question]
  );
  const string = UniqueString();
  const checkGood = () => {
    return parentCheckedGood
      ? document.getElementById(string + "1").click()
      : null;
  };
  const checkNA = () => {
    return parentCheckedNA
      ? document.getElementById(string + "4").click()
      : null;
  };
  useEffect(() => {
    checkGood();
    checkNA();
  }, [parentCheckedNA, parentCheckedGood]);
  return (
    <div>
      <FormGroup>
        <div>
          <CustomInput
            onChange={onChange}
            type="radio"
            id={string + "1"}
            name={question}
            value="Good"
            label="Good"
          />
          <CustomInput
            onChange={onChange}
            type="radio"
            id={string + "2"}
            name={question}
            value="Fair"
            label="Fair"
          />
          <CustomInput
            onChange={onChange}
            type="radio"
            id={string + "3"}
            name={question}
            value="Poor"
            label="Poor"
          />
          <CustomInput
            onChange={onChange}
            name={question}
            type="radio"
            id={string + "4"}
            value="N/A"
            label="N/A"
          />
        </div>
      </FormGroup>
    </div>
  );
}

export default Ratings;
