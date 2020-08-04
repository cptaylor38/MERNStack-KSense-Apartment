import React, { useContext, useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import FontAwesome from "react-fontawesome";
import styles from "../css/MoveInForm.module.css";
import { FormSectionsContext } from "../Store";
import axios from "axios";

export default function App() {
  const [state, setState] = useContext(FormSectionsContext);
  const sendData = () => {
    axios.post("/api/world", state).then((res) => {
      console.log(res.config.data);
    });
  };
  return (
    <div className={styles["ContactForm"]}>
      <h1>Welcome To The New Move In Form</h1>
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
      <button onClick={sendData} type="submit">
        Submit
      </button>
    </div>
  );
}
