import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import KitchenForm from "./components/KitchenForm";
import AppliancesForm from "./components/AppliancesForm";
import LivingRoomForm from "./components/LivingRoomForm";
import DiningRoomForm from "./components/DiningRoomForm";
import BedOneForm from "./components/BedOneForm";
import BedTwoForm from "./components/BedTwoForm";
import BedThreeForm from "./components/BedThreeForm";
import OtherForm from "./components/OtherForm";
import BathOneForm from "./components/BathOneForm";
import BathTwoForm from "./components/BathTwoForm";
import KeysForm from "./components/KeysForm";
import SignaturesForm from "./components/SignaturesForm";
import SurveyForm from "./components/SurveyForm";

export const KitchenGoodContext = React.createContext(false);
export const KitchenNAContext = React.createContext(false);
export const ApplianceGoodContext = React.createContext(false);
export const ApplianceNAContext = React.createContext(false);
export const LivingRoomGoodContext = React.createContext(false);
export const LivingRoomNAContext = React.createContext(false);
export const DiningRoomGoodContext = React.createContext(false);
export const DiningRoomNAContext = React.createContext(false);
export const BedroomOneGoodContext = React.createContext(false);
export const BedroomOneNAContext = React.createContext(false);
export const BedroomTwoGoodContext = React.createContext(false);
export const BedroomTwoNAContext = React.createContext(false);
export const BedroomThreeGoodContext = React.createContext(false);
export const BedroomThreeNAContext = React.createContext(false);
// not yet addded
export const OtherAreasGoodContext = React.createContext(false);
export const OtherAreasNAContext = React.createContext(false);
export const BathroomOneGoodContext = React.createContext(false);
export const BathroomOneNAContext = React.createContext(false);
export const BathroomTwoGoodContext = React.createContext(false);
export const BathroomTwoNAContext = React.createContext(false);
export const FormSectionsContext = React.createContext([]);
export const ClickedContext = React.createContext("");

function Store({ children }) {
  const [state, setState] = useState([
    {
      header: "CONTACT INFORMATION",
      collapsed: true,
      expanded: false,
      component: <ContactForm />,
    },
    {
      header: "KITCHEN INSPECTION",
      collapsed: true,
      expanded: false,
      component: <KitchenForm />,
    },
    {
      header: "APPLIANCES INSPECTION",
      collapsed: true,
      expanded: false,
      component: <AppliancesForm />,
    },
    {
      header: "LIVING ROOM INSPECTION",
      collapsed: true,
      expanded: false,
      component: <LivingRoomForm />,
    },
    {
      header: "DINING ROOM INSPECTION",
      collapsed: true,
      expanded: false,
      component: <DiningRoomForm />,
    },
    {
      header: "BEDROOM #1 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedOneForm />,
    },
    {
      header: "BEDROOM #2 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedTwoForm />,
    },
    {
      header: "BEDROOM #3 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedThreeForm />,
    },
    {
      header: "OTHER AREAS INSPECTION",
      collapsed: true,
      expanded: false,
      component: <OtherForm />,
    },
    {
      header: "BATHROOM #1 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BathOneForm />,
    },
    {
      header: "BATHROOM #2 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BathTwoForm />,
    },
    {
      header: "THE KEYS TO UNIT",
      collapsed: true,
      expanded: false,
      component: <KeysForm />,
    },
    {
      header: "SIGNATURES",
      collapsed: true,
      expanded: false,
      component: <SignaturesForm />,
    },
    {
      header: "QUICK SURVEY",
      collapsed: true,
      expanded: true,
      component: <SurveyForm />,
    },
  ]);
  const [kitchenCheckedGood, setKitchenCheckedGood] = useState(false);
  const [kitchenCheckedNA, setKitchenCheckedNA] = useState(false);
  const [applianceCheckedGood, setApplianceCheckedGood] = useState(false);
  const [applianceCheckedNA, setApplianceCheckedNA] = useState(false);
  const [livingRoomCheckedGood, setLivingRoomCheckedGood] = useState(false);
  const [livingRoomCheckedNA, setLivingRoomCheckedNA] = useState(false);
  const [diningRoomCheckedGood, setDiningRoomCheckedGood] = useState(false);
  const [diningRoomCheckedNA, setDiningRoomCheckedNA] = useState(false);
  const [bedroomOneCheckedGood, setBedroomOneCheckedGood] = useState(false);
  const [bedroomOneCheckedNA, setBedroomOneCheckedNA] = useState(false);
  const [bedroomTwoCheckedGood, setBedroomTwoCheckedGood] = useState(false);
  const [bedroomTwoCheckedNA, setBedroomTwoCheckedNA] = useState(false);
  const [bedroomThreeCheckedGood, setBedroomThreeCheckedGood] = useState(false);
  const [bedroomThreeCheckedNA, setBedroomThreeCheckedNA] = useState(false);
  //not added yet
  const [otherAreasCheckedGood, setOtherAreasCheckedGood] = useState(false);
  const [otherAreasCheckedNA, setOtherAreasCheckedNA] = useState(false);
  const [bathroomOneCheckedGood, setBathroomOneCheckedGood] = useState(false);
  const [bathroomOneCheckedNA, setBathroomOneCheckedNA] = useState(false);
  const [bathroomTwoCheckedGood, setBathroomTwoCheckedGood] = useState(false);
  const [bathroomTwoCheckedNA, setBathroomTwoCheckedNA] = useState(false);
  const [clicked, setClicked] = useState("");

  return (
    <KitchenGoodContext.Provider
      value={[kitchenCheckedGood, setKitchenCheckedGood]}
    >
      <KitchenNAContext.Provider
        value={[kitchenCheckedNA, setKitchenCheckedNA]}
      >
        <ApplianceGoodContext.Provider
          value={[applianceCheckedGood, setApplianceCheckedGood]}
        >
          <ApplianceNAContext.Provider
            value={[applianceCheckedNA, setApplianceCheckedNA]}
          >
            <LivingRoomGoodContext.Provider
              value={[livingRoomCheckedGood, setLivingRoomCheckedGood]}
            >
              <LivingRoomNAContext.Provider
                value={[livingRoomCheckedNA, setLivingRoomCheckedNA]}
              >
                <ClickedContext.Provider value={[clicked, setClicked]}>
                  <DiningRoomGoodContext.Provider
                    value={[diningRoomCheckedGood, setDiningRoomCheckedGood]}
                  >
                    <DiningRoomNAContext.Provider
                      value={[diningRoomCheckedNA, setDiningRoomCheckedNA]}
                    >
                      <BedroomOneGoodContext.Provider
                        value={[
                          bedroomOneCheckedGood,
                          setBedroomOneCheckedGood,
                        ]}
                      >
                        <BedroomOneNAContext.Provider
                          value={[bedroomOneCheckedNA, setBedroomOneCheckedNA]}
                        >
                          <BedroomTwoGoodContext.Provider
                            value={[
                              bedroomTwoCheckedGood,
                              setBedroomTwoCheckedGood,
                            ]}
                          >
                            <BedroomTwoNAContext.Provider
                              value={[
                                bedroomTwoCheckedNA,
                                setBedroomTwoCheckedNA,
                              ]}
                            >
                              <BedroomThreeGoodContext.Provider
                                value={[
                                  bedroomThreeCheckedGood,
                                  setBedroomThreeCheckedGood,
                                ]}
                              >
                                <BedroomThreeNAContext.Provider
                                  value={[
                                    bedroomThreeCheckedNA,
                                    setBedroomThreeCheckedNA,
                                  ]}
                                >
                                  <OtherAreasGoodContext.Provider
                                    value={[
                                      otherAreasCheckedGood,
                                      setOtherAreasCheckedGood,
                                    ]}
                                  >
                                    <OtherAreasNAContext.Provider
                                      value={[
                                        otherAreasCheckedNA,
                                        setOtherAreasCheckedNA,
                                      ]}
                                    >
                                      <BathroomOneGoodContext.Provider
                                        value={[
                                          bathroomOneCheckedGood,
                                          setBathroomOneCheckedGood,
                                        ]}
                                      >
                                        <BathroomOneNAContext.Provider
                                          value={[
                                            bathroomOneCheckedNA,
                                            setBathroomOneCheckedNA,
                                          ]}
                                        >
                                          <BathroomTwoGoodContext.Provider
                                            value={[
                                              bathroomTwoCheckedGood,
                                              setBathroomTwoCheckedGood,
                                            ]}
                                          >
                                            <BathroomTwoNAContext.Provider
                                              value={[
                                                bathroomTwoCheckedNA,
                                                setBathroomTwoCheckedNA,
                                              ]}
                                            >
                                              <FormSectionsContext.Provider
                                                value={[state, setState]}
                                              >
                                                {children}
                                              </FormSectionsContext.Provider>
                                            </BathroomTwoNAContext.Provider>
                                          </BathroomTwoGoodContext.Provider>
                                        </BathroomOneNAContext.Provider>
                                      </BathroomOneGoodContext.Provider>
                                    </OtherAreasNAContext.Provider>
                                  </OtherAreasGoodContext.Provider>
                                </BedroomThreeNAContext.Provider>
                              </BedroomThreeGoodContext.Provider>
                            </BedroomTwoNAContext.Provider>
                          </BedroomTwoGoodContext.Provider>
                        </BedroomOneNAContext.Provider>
                      </BedroomOneGoodContext.Provider>
                    </DiningRoomNAContext.Provider>
                  </DiningRoomGoodContext.Provider>
                </ClickedContext.Provider>
              </LivingRoomNAContext.Provider>
            </LivingRoomGoodContext.Provider>
          </ApplianceNAContext.Provider>
        </ApplianceGoodContext.Provider>
      </KitchenNAContext.Provider>
    </KitchenGoodContext.Provider>
  );
}

export default Store;
