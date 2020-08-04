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
} from "../../Store";

function SectionHeader({ title }) {
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
  const [clicked, setClicked] = useContext(ClickedContext);
  return (
    <div>
      <h1 className={styles["Header"]}>{title}</h1>
      <div className={styles["MarkAllWrapper"]}>
        <button
          className={styles["MarkAll"]}
          onClick={() => {
            setClicked(title);
            return title === "Kitchen Inspection"
              ? setKitchenCheckedGood(!kitchenCheckedGood)
              : title === "Appliances Inspection"
              ? setApplianceCheckedGood(!applianceCheckedGood)
              : title === "Living Room Inspection"
              ? setLivingRoomCheckedGood(!livingRoomCheckedGood)
              : title === "Dining Room Inspection"
              ? setDiningRoomCheckedGood(!diningRoomCheckedGood)
              : null;
          }}
        >
          Mark all items as "Good" in this section
        </button>
        <br />
        <button
          className={styles["MarkAll"]}
          onClick={() => {
            setClicked(title);
            return title === "Kitchen Inspection"
              ? setKitchenCheckedNA(!kitchenCheckedNA)
              : title === "Appliances Inspection"
              ? setApplianceCheckedNA(!applianceCheckedNA)
              : title === "Living Room Inspection"
              ? setLivingRoomCheckedNA(!livingRoomCheckedNA)
              : title === "Dining Room Inspection"
              ? setDiningRoomCheckedNA(!diningRoomCheckedNA)
              : null;
          }}
        >
          Mark all items as "N/A" in this section
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
