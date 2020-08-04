import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import styles from "./surveyform.module.css";

function SurveyForm() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [six, setSix] = useState(0);
  const changeRatingOne = (newRating, name) => {
    setOne(newRating);
  };
  const changeRatingTwo = (newRating, name) => {
    setTwo(newRating);
  };
  const changeRatingThree = (newRating, name) => {
    setThree(newRating);
  };
  const changeRatingFour = (newRating, name) => {
    setFour(newRating);
  };
  const changeRatingFive = (newRating, name) => {
    setFive(newRating);
  };
  const changeRatingSix = (newRating, name) => {
    setSix(newRating);
  };
  return (
    <div>
      <h6>
        We're happy to welcome you to our community! Please take a few moments
        to share your thoughts. On a scale of 1-5, please rate your overall
        satisfaction (with 5 being very satisfied and 1 being very unsatisfied):
      </h6>
      <p className={styles["Question"]}>
        Was the office team friendly and helpful?
      </p>
      <StarRatings
        rating={one}
        starRatedColor="red"
        starDimension="30px"
        changeRating={changeRatingOne}
        numberOfStars={5}
        name="one"
      />
      <p className={styles["Question"]}>
        Was your apartment ready when you came to move-in?
      </p>
      <StarRatings
        rating={two}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={changeRatingTwo}
        numberOfStars={5}
        name="two"
      />
      <p className={styles["Question"]}>
        How satisfied are you with the cleanliness of your apartment?
      </p>
      <StarRatings
        rating={three}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={changeRatingThree}
        numberOfStars={5}
        name="three"
      />
      <p className={styles["Question"]}>
        Is everything in working order (appliances, door locks, faucets, etc.)?
      </p>
      <StarRatings
        rating={four}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={changeRatingFour}
        numberOfStars={5}
        name="four"
      />
      <p className={styles["Question"]}>
        How satisfied are you with the community amenities available?
      </p>
      <StarRatings
        rating={five}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={changeRatingFive}
        numberOfStars={5}
        name="five"
      />
      <p className={styles["Question"]}>
        Overall, how satisfied are you with your new apartment?
      </p>
      <StarRatings
        rating={six}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={changeRatingSix}
        numberOfStars={5}
        name="six"
      />
    </div>
  );
}

export default SurveyForm;
