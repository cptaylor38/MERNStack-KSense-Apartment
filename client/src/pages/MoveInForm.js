import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Collapse, Button, CardBody, Card, Form } from "reactstrap";
import FontAwesome from "react-fontawesome";
import styles from "../css/MoveInForm.module.css";
import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";
import KitchenForm from "../components/KitchenForm";
import AppliancesForm from "../components/AppliancesForm";
import LivingRoomForm from "../components/LivingRoomForm";
import DiningRoomForm from "../components/DiningRoomForm";
import BedOneForm from "../components/BedOneForm";
import BedTwoForm from "../components/BedTwoForm";
import BedThreeForm from "../components/BedThreeForm";
import OtherForm from "../components/OtherForm";
import BathOneForm from "../components/BathOneForm";
import BathTwoForm from "../components/BathTwoForm";
import KeysForm from "../components/KeysForm";
import SignaturesForm from "../components/SignaturesForm";
import SurveyForm from "../components/SurveyForm";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
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
      expanded: false,
      component: <SurveyForm />,
    },
  ]);
  return (
    <div className={styles["ContactForm"]}>
      <h1>Welcome To The New Move In Form</h1>
      <hr />
      {state.map((index) => {
        return (
          <div>
            <Button
              className={styles["CollapseBtn"]}
              onClick={() => {
                setState(
                  [...state].map((object) => {
                    if (object.header === index.header) {
                      return {
                        ...object,
                        expanded: !index.expanded,
                      };
                    } else return object;
                  })
                );
              }}
              style={{ marginBottom: "1rem", width: "100%" }}
            >
              <p>{index.header}</p>
              <FontAwesome
                className="super-crazy-colors"
                name="angle-up"
                rotate={index.expanded ? null : 180}
                size="lg"
                style={{
                  marginTop: "5px",
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                }}
              />
            </Button>
            <Collapse className={styles["Collapse"]} isOpen={index.expanded}>
              <Card>
                <CardBody>{index.component}</CardBody>
              </Card>
            </Collapse>
          </div>
        );
      })}
      <button form="my-form" type="submit">
        Submit
      </button>
    </div>
  );
}
