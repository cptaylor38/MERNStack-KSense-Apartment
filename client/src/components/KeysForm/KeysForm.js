import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styles from "./keysform.module.css";
import ImageUploader from "../CommentsSection";

function KeysForm() {
  const [state, setState] = useState({
    fdkeys: "",
    dbkeys: "",
    mbkeys: "",
    cakeys: "",
    rkeys: "",
    other: "",
    othernames: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form id="contact-form">
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Front Door Keys Issued
          </Label>
          <Input
            value={state.fdkeys}
            onChange={handleChange}
            type="number"
            name="fdkeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Dead Bolt Keys Issued
          </Label>
          <Input
            value={state.dbkeys}
            onChange={handleChange}
            type="number"
            name="dbkeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Mailbox Keys Issued
          </Label>
          <Input
            value={state.mbkeys}
            onChange={handleChange}
            type="number"
            name="mbkeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Common Area Keys Issued
          </Label>
          <Input
            value={state.cakeys}
            onChange={handleChange}
            type="number"
            name="cakeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Remotes Issued
          </Label>
          <Input
            value={state.rkeys}
            onChange={handleChange}
            type="number"
            name="rkeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label for="exampleEmail">Quantity of other objects Issued</Label>
          <Input
            value={state.other}
            onChange={handleChange}
            type="number"
            name="other"
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label for="exampleEmail">What other objects have been issued?</Label>
          <Input
            value={state.othernames}
            onChange={handleChange}
            type="text"
            name="othernames"
          />
        </FormGroup>
      </form>
      <ImageUploader title={"Keys to Unit"} />
    </div>
  );
}

export default KeysForm;
