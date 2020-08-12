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
export const OtherAreasGoodContext = React.createContext(false);
export const OtherAreasNAContext = React.createContext(false);
export const BathroomOneGoodContext = React.createContext(false);
export const BathroomOneNAContext = React.createContext(false);
export const BathroomTwoGoodContext = React.createContext(false);
export const BathroomTwoNAContext = React.createContext(false);
export const FormSectionsContext = React.createContext([]);
// not yet addded
export const ClickedContext = React.createContext("");
export const KitchenFormContext = React.createContext({});
export const AppliancesFormContext = React.createContext({});
export const BathOneFormContext = React.createContext({});
export const BathTwoFormContext = React.createContext({});
export const BedOneFormContext = React.createContext({});
export const BedTwoFormContext = React.createContext({});
export const BedThreeFormContext = React.createContext({});
export const DiningRoomFormContext = React.createContext({});
export const LivingRoomFormContext = React.createContext({});
export const OtherAreasFormContext = React.createContext({});
export const SignatureFormContext = React.createContext([]);
export const FormQuestionsContext = React.createContext({});
export const StarRatingsContext = React.createContext({});
export const ImageUploadContext = React.createContext({});
export const CommentsContext = React.createContext({});
export const ContactInfoContext = React.createContext({});
export const KeysFormContext = React.createContext({});
export const FormAnswersContext = React.createContext({});

function Store({ children }) {
  const [formQuestions, setFormQuestions] = useState({});
  const [formAnswers, setFormAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    nunit: "",
    address: "",
    cunit: "",
    city: "",
    state: "",
    zip: "",
  });
  const [formSections, setFormSections] = useState([
    {
      name: "contact",
      header: "CONTACT INFORMATION",
      collapsed: true,
      expanded: false,
      component: <ContactForm />,
    },
    {
      name: "kitchen",
      header: "KITCHEN INSPECTION",
      collapsed: true,
      expanded: false,
      component: <KitchenForm />,
    },
    {
      name: "appliances",
      header: "APPLIANCES INSPECTION",
      collapsed: true,
      expanded: false,
      component: <AppliancesForm />,
    },
    {
      name: "living",
      header: "LIVING ROOM INSPECTION",
      collapsed: true,
      expanded: false,
      component: <LivingRoomForm />,
    },
    {
      name: "dining",
      header: "DINING ROOM INSPECTION",
      collapsed: true,
      expanded: false,
      component: <DiningRoomForm />,
    },
    {
      name: "bedone",
      header: "BEDROOM #1 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedOneForm />,
    },
    {
      name: "bedtwo",
      header: "BEDROOM #2 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedTwoForm />,
    },
    {
      name: "bedthree",
      header: "BEDROOM #3 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BedThreeForm />,
    },
    {
      name: "other",
      header: "OTHER AREAS INSPECTION",
      collapsed: true,
      expanded: false,
      component: <OtherForm />,
    },
    {
      name: "bathone",
      header: "BATHROOM #1 INSPECTION",
      collapsed: true,
      expanded: false,
      component: <BathOneForm />,
    },
    {
      name: "bathtwo",
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
      expanded: false,
      component: <SurveyForm />,
    },
  ]);
  const [keysFormAnswers, setKeysFormAnswers] = useState({
    fdkeys: "",
    dbkeys: "",
    mbkeys: "",
    cakeys: "",
    rkeys: "",
    other: "",
    othernames: "",
  });
  const [comments, setComments] = useState({});
  const [files, setFiles] = useState({});
  const [starRatings, setStarRatings] = useState({});
  const [signatureFormImages, setSignatureFormImages] = useState([]);
  const [otherAreasFormAnswers, setOtherAreasFormAnswers] = useState({});
  const [livingRoomFormAnswers, setLivingRoomFormAnswers] = useState({});
  const [diningRoomFormAnswers, setDiningRoomFormAnswers] = useState({});
  const [bedThreeFormAnswers, setBedThreeFormAnswers] = useState({});
  const [bedTwoFormAnswers, setBedTwoFormAnswers] = useState({});
  const [bedOneFormAnswers, setBedOneFormAnswers] = useState({});
  const [bathTwoFormAnswers, setBathTwoFormAnswers] = useState({});
  const [bathOneFormAnswers, setBathOneFormAnswers] = useState({});
  const [appliancesFormAnswers, setAppliancesFormAnswers] = useState({});
  const [kitchenFormAnswers, setKitchenFormAnswers] = useState({});
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
    <FormAnswersContext.Provider value={[formAnswers, setFormAnswers]}>
      <KeysFormContext.Provider value={[keysFormAnswers, setKeysFormAnswers]}>
        <ContactInfoContext.Provider value={[contactInfo, setContactInfo]}>
          <CommentsContext.Provider value={[comments, setComments]}>
            <ImageUploadContext.Provider value={[files, setFiles]}>
              <StarRatingsContext.Provider
                value={[starRatings, setStarRatings]}
              >
                <FormQuestionsContext.Provider
                  value={[formQuestions, setFormQuestions]}
                >
                  <SignatureFormContext.Provider
                    value={[signatureFormImages, setSignatureFormImages]}
                  >
                    <KitchenGoodContext.Provider
                      value={[kitchenCheckedGood, setKitchenCheckedGood]}
                    >
                      <KitchenNAContext.Provider
                        value={[kitchenCheckedNA, setKitchenCheckedNA]}
                      >
                        <ApplianceGoodContext.Provider
                          value={[
                            applianceCheckedGood,
                            setApplianceCheckedGood,
                          ]}
                        >
                          <ApplianceNAContext.Provider
                            value={[applianceCheckedNA, setApplianceCheckedNA]}
                          >
                            <LivingRoomGoodContext.Provider
                              value={[
                                livingRoomCheckedGood,
                                setLivingRoomCheckedGood,
                              ]}
                            >
                              <LivingRoomNAContext.Provider
                                value={[
                                  livingRoomCheckedNA,
                                  setLivingRoomCheckedNA,
                                ]}
                              >
                                <ClickedContext.Provider
                                  value={[clicked, setClicked]}
                                >
                                  <DiningRoomGoodContext.Provider
                                    value={[
                                      diningRoomCheckedGood,
                                      setDiningRoomCheckedGood,
                                    ]}
                                  >
                                    <DiningRoomNAContext.Provider
                                      value={[
                                        diningRoomCheckedNA,
                                        setDiningRoomCheckedNA,
                                      ]}
                                    >
                                      <BedroomOneGoodContext.Provider
                                        value={[
                                          bedroomOneCheckedGood,
                                          setBedroomOneCheckedGood,
                                        ]}
                                      >
                                        <BedroomOneNAContext.Provider
                                          value={[
                                            bedroomOneCheckedNA,
                                            setBedroomOneCheckedNA,
                                          ]}
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
                                                                value={[
                                                                  formSections,
                                                                  setFormSections,
                                                                ]}
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
                  </SignatureFormContext.Provider>
                </FormQuestionsContext.Provider>
              </StarRatingsContext.Provider>
            </ImageUploadContext.Provider>
          </CommentsContext.Provider>
        </ContactInfoContext.Provider>
      </KeysFormContext.Provider>
    </FormAnswersContext.Provider>
  );
}

export default Store;
