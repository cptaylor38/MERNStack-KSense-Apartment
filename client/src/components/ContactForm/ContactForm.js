import React, { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { useForm } from "react-hook-form";
import styles from "./contactform.module.css";
import axios from "axios";
import InputMask from "react-input-mask";

function ContactForm(props) {
  const [state, setState] = useState({
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    console.log(state);
    axios.post("/contactinfo", state).then(function (res) {
      console.log(res);
    });
  };
  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="exampleEmail">
            First Name
          </Label>
          <Input
            value={state.fname}
            onChange={handleChange}
            type="text"
            placeholder="First name"
            name="fname"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Last Name
          </Label>
          <Input
            value={state.lname}
            onChange={handleChange}
            type="text"
            placeholder="Last name"
            name="lname"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Email
          </Label>
          <Input
            value={state.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Phone
          </Label>
          <Input
            value={state.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Mobile number"
            name="phone"
            tag={InputMask}
            mask="(999) 999-9999"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            New Unit #
          </Label>
          <Input
            value={state.nunit}
            onChange={handleChange}
            type="number"
            placeholder="New Unit #"
            name="nunit"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Current Mailing Address
          </Label>
          <Input
            value={state.address}
            onChange={handleChange}
            type="address"
            placeholder="Current Mailing Address"
            name="address"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Current Unit #
          </Label>
          <Input
            value={state.cunit}
            onChange={handleChange}
            type="number"
            placeholder="Current Unit #"
            name="cunit"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Current City
          </Label>
          <Input
            value={state.city}
            onChange={handleChange}
            type="city"
            placeholder="Current City"
            name="city"
            required
          />
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="exampleSelect">
            Current State
          </Label>
          <Input
            value={state.state}
            onChange={handleChange}
            type="select"
            placeholder="Current State"
            name="state"
            required
          >
            <option value=""></option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Input>
        </FormGroup>
        <FormGroup className={styles["ContactFormGroup"]}>
          <Label className={styles["Required"]} for="examplePassword">
            Current Zip Code
          </Label>
          <Input
            value={state.zip}
            onChange={handleChange}
            type="number"
            placeholder="Current Zip Code"
            name="zip"
            required
          />
        </FormGroup>
      </form>
    </div>
  );
}

export default ContactForm;
