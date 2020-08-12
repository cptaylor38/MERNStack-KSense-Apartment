import React, { useContext } from "react";
import styles from "./sectionheader.module.css";
import {
  KitchenGoodContext,
  KitchenNAContext,
  ClickedContext,
  ApplianceGoodContext,
  ApplianceNAContext,
  LivingRoomGoodContext,
  LivingRoomNAContext,
  DiningRoomGoodContext,
  DiningRoomNAContext,
  BedroomOneGoodContext,
  BedroomOneNAContext,
  BedroomTwoGoodContext,
  BedroomTwoNAContext,
  BedroomThreeGoodContext,
  BedroomThreeNAContext,
  OtherAreasGoodContext,
  OtherAreasNAContext,
  BathroomOneGoodContext,
  BathroomOneNAContext,
  BathroomTwoGoodContext,
  BathroomTwoNAContext,
  FormAnswersContext,
} from "../../Store";

function SectionHeader({ title, name }) {
  const [formAnswers, setFormAnswers] = useContext(FormAnswersContext);
  const [kitchenCheckedGood, setKitchenCheckedGood] = useContext(
    KitchenGoodContext
  );
  const [kitchenCheckedNA, setKitchenCheckedNA] = useContext(KitchenNAContext);
  const [applianceCheckedGood, setApplianceCheckedGood] = useContext(
    ApplianceGoodContext
  );
  const [applianceCheckedNA, setApplianceCheckedNA] = useContext(
    ApplianceNAContext
  );
  const [livingRoomCheckedGood, setLivingRoomCheckedGood] = useContext(
    LivingRoomGoodContext
  );
  const [livingRoomCheckedNA, setLivingRoomCheckedNA] = useContext(
    LivingRoomNAContext
  );
  const [diningRoomCheckedGood, setDiningRoomCheckedGood] = useContext(
    DiningRoomGoodContext
  );
  const [diningRoomCheckedNA, setDiningRoomCheckedNA] = useContext(
    DiningRoomNAContext
  );
  const [bedroomOneCheckedGood, setBedroomOneCheckedGood] = useContext(
    BedroomOneGoodContext
  );
  const [bedroomOneCheckedNA, setBedroomOneCheckedNA] = useContext(
    BedroomOneNAContext
  );
  const [bedroomTwoCheckedGood, setBedroomTwoCheckedGood] = useContext(
    BedroomTwoGoodContext
  );
  const [bedroomTwoCheckedNA, setBedroomTwoCheckedNA] = useContext(
    BedroomTwoNAContext
  );
  const [bedroomThreeCheckedGood, setBedroomThreeCheckedGood] = useContext(
    BedroomThreeGoodContext
  );
  const [bedroomThreeCheckedNA, setBedroomThreeCheckedNA] = useContext(
    BedroomThreeNAContext
  );
  const [otherAreasCheckedGood, setOtherAreasCheckedGood] = useContext(
    OtherAreasGoodContext
  );
  const [otherAreasCheckedNA, setOtherAreasCheckedNA] = useContext(
    OtherAreasNAContext
  );
  const [bathroomOneCheckedGood, setBathroomOneCheckedGood] = useContext(
    BathroomOneGoodContext
  );
  const [bathroomOneCheckedNA, setBathroomOneCheckedNA] = useContext(
    BathroomOneNAContext
  );
  const [bathroomTwoCheckedGood, setBathroomTwoCheckedGood] = useContext(
    BathroomTwoGoodContext
  );
  const [bathroomTwoCheckedNA, setBathroomTwoCheckedNA] = useContext(
    BathroomTwoNAContext
  );
  const checkGood = () => {
    if (title === "Kitchen Inspection") {
      setKitchenCheckedNA(false);
      return setKitchenCheckedGood(!kitchenCheckedGood);
    } else if (title === "Appliances Inspection") {
      setApplianceCheckedNA(false);
      return setApplianceCheckedGood(!applianceCheckedGood);
    } else if (title === "Living Room Inspection") {
      setLivingRoomCheckedNA(false);
      return setLivingRoomCheckedGood(!livingRoomCheckedGood);
    } else if (title === "Dining Room Inspection") {
      setDiningRoomCheckedNA(false);
      return setDiningRoomCheckedGood(!diningRoomCheckedGood);
    } else if (title === "Bedroom #1 Inspection") {
      setBedroomOneCheckedNA(false);
      return setBedroomOneCheckedGood(!bedroomOneCheckedGood);
    } else if (title === "Bedroom #2 Inspection") {
      setBedroomTwoCheckedNA(false);
      return setBedroomTwoCheckedGood(!bedroomTwoCheckedGood);
    } else if (title === "Bedroom #3 Inspection") {
      setBedroomThreeCheckedNA(false);
      return setBedroomThreeCheckedGood(!bedroomThreeCheckedGood);
    } else if (title === "Other Areas Inspection") {
      setOtherAreasCheckedNA(false);
      return setOtherAreasCheckedGood(!otherAreasCheckedGood);
    } else if (title === "Bathroom #1 Inspection") {
      setBathroomOneCheckedNA(false);
      return setBathroomOneCheckedGood(!bathroomOneCheckedGood);
    } else if (title === "Bathroom #2 Inspection") {
      setBathroomTwoCheckedNA(false);
      return setBathroomTwoCheckedGood(!bathroomTwoCheckedGood);
    } else return null;
  };
  const checkNA = () => {
    if (title === "Kitchen Inspection") {
      setKitchenCheckedGood(false);
      return setKitchenCheckedNA(!kitchenCheckedNA);
    } else if (title === "Appliances Inspection") {
      setApplianceCheckedGood(false);
      return setApplianceCheckedNA(!applianceCheckedNA);
    } else if (title === "Living Room Inspection") {
      setLivingRoomCheckedGood(false);
      return setLivingRoomCheckedNA(!livingRoomCheckedNA);
    } else if (title === "Dining Room Inspection") {
      setDiningRoomCheckedGood(false);
      return setDiningRoomCheckedNA(!diningRoomCheckedNA);
    } else if (title === "Bedroom #1 Inspection") {
      setBedroomOneCheckedGood(false);
      return setBedroomOneCheckedNA(!bedroomOneCheckedNA);
    } else if (title === "Bedroom #2 Inspection") {
      setBedroomTwoCheckedGood(false);
      return setBedroomTwoCheckedNA(!bedroomTwoCheckedNA);
    } else if (title === "Bedroom #3 Inspection") {
      setBedroomThreeCheckedGood(false);
      return setBedroomThreeCheckedNA(!bedroomThreeCheckedNA);
    } else if (title === "Other Areas Inspection") {
      setOtherAreasCheckedGood(false);
      return setOtherAreasCheckedNA(!otherAreasCheckedNA);
    } else if (title === "Bathroom #1 Inspection") {
      setBathroomOneCheckedGood(false);
      return setBathroomOneCheckedNA(!bathroomOneCheckedNA);
    } else if (title === "Bathroom #2 Inspection") {
      setBathroomTwoCheckedGood(false);
      return setBathroomTwoCheckedNA(!bathroomTwoCheckedNA);
    } else return null;
  };
  return (
    <div>
      <h1 className={styles["Header"]}>{title}</h1>
      <div className={styles["MarkAllWrapper"]}>
        <button className={styles["MarkAll"]} onClick={checkGood}>
          Mark all items as "Good" in this section
        </button>
        <br />
        <button className={styles["MarkAll"]} onClick={checkNA}>
          Mark all items as "N/A" in this section
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
