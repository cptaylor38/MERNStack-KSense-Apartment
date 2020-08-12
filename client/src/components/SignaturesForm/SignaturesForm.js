import React, { useRef, useContext } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { SignatureFormContext } from "../../Store";
import "./signaturesform.css";

function SignaturesForm() {
  const [signatureFormImages, setSignatureFormImages] = useContext(
    SignatureFormContext
  );
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = (event) => {
    const index = event.target.value;
    const arr = [...signatureFormImages];

    if (signatureFormImages[index]) {
      arr[index] = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
      setSignatureFormImages(arr);
    } else {
      setSignatureFormImages((state) => [
        ...state,
        sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
      ]);
    }
  };
  return (
    <div className="SignatureForm">
      <div className={"ContentWrapper"}>
        <h5 className={"Required"}>Resident's Signature</h5>
        <Popup
          className={"PopupContent"}
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
              <button value={0} className={"SignatureBtn"} onClick={save}>
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
        {signatureFormImages[0] ? (
          <img
            src={signatureFormImages[0]}
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
          className={"PopupContent"}
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
              <button value={1} className={"SignatureBtn"} onClick={save}>
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
        {signatureFormImages[1] ? (
          <img
            src={signatureFormImages[1]}
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
