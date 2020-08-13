import React, { useContext, useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import FontAwesome from "react-fontawesome";
import Loader from "react-loader-spinner";
import styles from "../css/MoveInForm.module.css";
import {
  FormSectionsContext,
  FormQuestionsContext,
  StarRatingsContext,
  CommentsContext,
  ImageUploadContext,
  ContactInfoContext,
  FormAnswersContext,
  KeysFormContext,
  SignatureFormContext,
  LoadingContext,
  BelowThreeContext,
} from "../Store";
import axios from "axios";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Origin", "http://localhost:3000");

export default function MoveInForm({ Logo, Link, Email, Apartment }) {
  const [complete, setComplete] = useState(true);
  //--------to be sent to server------------
  const [signatureFormImages, setSignatureFormImages] = useContext(
    SignatureFormContext
  );
  const [formAnswers, setFormAnswers] = useContext(FormAnswersContext);
  const [starRatings, setStarRatings] = useContext(StarRatingsContext);
  const [comments, setComments] = useContext(CommentsContext);
  const [files, setFiles] = useContext(ImageUploadContext);
  const [contactInfo, setContactInfo] = useContext(ContactInfoContext);
  const [keysFormAnswers, setKeysFormAnswers] = useContext(KeysFormContext);
  const [belowThreeText, setBelowThreeText] = useContext(BelowThreeContext);
  //-----------end sent to server------------
  const [isLoading, setIsLoading] = useContext(LoadingContext);
  const [formQuestions, setFormQuestions] = useContext(FormQuestionsContext);
  const [state, setState] = useContext(FormSectionsContext);
  const getData = async () => {
    const apartmentName = Apartment.toLowerCase();
    const response = await axios.get(`api/${apartmentName}`);

    await setFormQuestions(response.data[0]);
    await setIsLoading(false);
  };
  const sendData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !contactInfo.fname.length ||
      !contactInfo.lname.length ||
      !contactInfo.email.length ||
      !contactInfo.phone.length ||
      !contactInfo.nunit.length ||
      !contactInfo.address.length ||
      !contactInfo.cunit.length ||
      !contactInfo.city.length ||
      !contactInfo.state.length ||
      !contactInfo.zip.length ||
      !signatureFormImages.length ||
      !formAnswers.appliances.length ||
      !formAnswers.bathone ||
      !formAnswers.bathtwo ||
      !formAnswers.bedone ||
      !formAnswers.bedtwo ||
      !formAnswers.bedthree ||
      !formAnswers.dining ||
      !formAnswers.kitchen ||
      !formAnswers.living ||
      !formAnswers.other ||
      !keysFormAnswers
    ) {
      setComplete(false);
      setIsLoading(false);
      return false;
    } else {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/submitform",
        data: {
          logo: Logo,
          abovethreestars: Link,
          belowthreestars: belowThreeText,
          email: Email,
          contact: contactInfo,
          appliances: formAnswers.appliances,
          bathone: formAnswers.bathone,
          bathtwo: formAnswers.bathtwo,
          bedone: formAnswers.bedone,
          bedtwo: formAnswers.bedtwo,
          bedthree: formAnswers.bedthree,
          dining: formAnswers.dining,
          kitchen: formAnswers.kitchen,
          living: formAnswers.living,
          other: formAnswers.other,
          ratings: starRatings,
          comments,
          files,
          keys: keysFormAnswers,
        },
      });
      await setIsLoading(false);
      await window.location.reload(true);
    }
  };
  const onClickState = (index) => {
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
  };
  useEffect(() => {
    getData();
  }, [state]);
  return (
    <div className={styles["ContactForm"]}>
      <form>
        {isLoading ? (
          <Loader
            className={styles["Loader"]}
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        ) : null}
        <div className={styles["FormHeader"]}>
          <img style={{ height: "75px" }} src={`${Logo}`} alt="apartment" />
          <h1>{Apartment} Move-in Form</h1>
        </div>
        {state.map((index, value) => {
          return (
            <div key={value}>
              <Button
                className={styles["CollapseBtn"]}
                onClick={() => {
                  onClickState(index);
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
        <div className={styles["SubmitBox"]}>
          <div className={styles["ErrorMessage"]}>
            {!complete ? "*Please Complete All the Required Fields*" : null}
          </div>
          <Button
            className={styles["SubmitBtn"]}
            onClick={sendData}
            disabled={isLoading ? true : false}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
