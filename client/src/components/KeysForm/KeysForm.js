import React, { useState, useContext } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styles from "./keysform.module.css";
import ImageUploader from "../CommentsSection";
import { KeysFormContext } from "../../Store";

function KeysForm() {
  const [keysFormAnswers, setKeysFormAnswers] = useContext(KeysFormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeysFormAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <div id="contact-form">
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            Quantity of Front Door Keys Issued
          </Label>
          <Input
            value={keysFormAnswers.fdkeys}
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
            value={keysFormAnswers.dbkeys}
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
            value={keysFormAnswers.mbkeys}
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
            value={keysFormAnswers.cakeys}
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
            value={keysFormAnswers.rkeys}
            onChange={handleChange}
            type="number"
            name="rkeys"
            required
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label for="exampleEmail">Quantity of other objects Issued</Label>
          <Input
            value={keysFormAnswers.other}
            onChange={handleChange}
            type="number"
            name="other"
          />
        </FormGroup>
        <FormGroup className={styles["KeysFormGroup"]}>
          <Label for="exampleEmail">What other objects have been issued?</Label>
          <Input
            value={keysFormAnswers.othernames}
            onChange={handleChange}
            type="text"
            name="othernames"
          />
        </FormGroup>
      </div>
      <ImageUploader title="Keys to Unit" />
    </div>
  );
}

export default KeysForm;
