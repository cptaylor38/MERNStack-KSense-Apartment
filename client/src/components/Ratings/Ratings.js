import React, { useContext } from "react";
import { FormGroup, CustomInput } from "reactstrap";
import { KitchenGoodContext } from "../../Store";
import { KitchenNAContext } from "../../Store";

function Ratings({ parentCheckedGood, parentCheckedNA }) {
  //pass usecontext to parent then it passes to child component
  const [kitchenCheckedGood, setKitchenCheckedGood] = useContext(
    KitchenGoodContext
  );
  const [kitchenCheckedNA, setKitchenCheckedNA] = useContext(KitchenNAContext);
  return (
    <div>
      <FormGroup required>
        <div>
          <CustomInput
            checked={parentCheckedGood}
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
            checked={parentCheckedNA}
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
