import React, { useState, useRef } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./signaturesform.css";

function SignaturesForm() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const [imageURLTwo, setImageURLTwo] = useState(null);
  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  const saveTwo = () =>
    setImageURLTwo(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  return (
    <div className="SignatureForm">
      <div className={"ContentWrapper"}>
        <h5 className={"Required"}>Resident's Signature</h5>
        <Popup
          modal
          trigger={
            <button className={"SignatureBtn"}>Open Signature Pad</button>
          }
          closeOnDocumentClick={false}
        >
          {(close) => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  dotSize: 10,
                  className: "SignatureCanvas",
                }}
              />
              {/* Button to trigger save canvas image */}
              <button className={"SignatureBtn"} onClick={save}>
                Save
              </button>
              <button className={"SignatureBtn"} onClick={clear}>
                Clear
              </button>
              <button className={"SignatureBtn"} onClick={close}>
                Close
              </button>
            </>
          )}
        </Popup>

        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              height: "150px",
              display: "block",
              margin: "0 auto",
              marginTop: "5%",
              border: "1px solid black",
              width: "200px",
            }}
          />
        ) : null}
        <FormGroup className={"DateOne"}>
          <Label className={"Required"} for="exampleDate">
            Date:
          </Label>
          <Input
            required
            type="date"
            name="dateOne"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
      </div>
      <div className={"ContentWrapper"}>
        <h5>Resident's Signature</h5>
        <Popup
          modal
          trigger={
            <button className={"SignatureBtn"}>Open Signature Pad</button>
          }
          closeOnDocumentClick={false}
        >
          {(close) => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: "SignatureCanvas",
                }}
              />
              {/* Button to trigger save canvas image */}
              <button className={"SignatureBtn"} onClick={saveTwo}>
                Save
              </button>
              <button className={"SignatureBtn"} onClick={clear}>
                Clear
              </button>
              <button className={"SignatureBtn"} onClick={close}>
                Close
              </button>
            </>
          )}
        </Popup>
        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        {imageURLTwo ? (
          <img
            src={imageURLTwo}
            alt="my signature"
            style={{
              height: "150px",
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "200px",
            }}
          />
        ) : null}
        <FormGroup className={"DateTwo"}>
          <Label for="exampleDate">Date:</Label>
          <Input
            required
            type="date"
            name="dateTwo"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default SignaturesForm;
