import React, { useState } from "react";
import { FormGroup, CustomInput } from "reactstrap";

function Ratings({ parentCheckedGood, parentCheckedNA }) {
  return (
    <div>
      <FormGroup>
        <div>
          <CustomInput
            checked={parentCheckedGood ? true : null}
            type="checkbox"
            id="exampleCustomCheckbox"
            label="Good"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox2"
            label="Fair"
          />
          <CustomInput
            type="checkbox"
            id="exampleCustomCheckbox3"
            label="Poor"
          />
          <CustomInput
            checked={parentCheckedNA ? true : null}
            type="checkbox"
            id="exampleCustomCheckbox4"
            label="N/A"
          />
        </div>
      </FormGroup>
    </div>
  );
}

export default Ratings;
