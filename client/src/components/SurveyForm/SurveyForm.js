import React, { useContext } from "react";
import StarRatings from "react-star-ratings";
import styles from "./surveyform.module.css";
import { StarRatingsContext } from "../../Store";

function SurveyForm() {
  const [starRatings, setStarRatings] = useContext(StarRatingsContext);
  const handleChange = (newRating, name) => {
    setStarRatings((state) => ({ ...state, [name]: newRating }));
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
        rating={starRatings.one}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="one"
      />
      <p className={styles["Question"]}>
        Was your apartment ready when you came to move-in?
      </p>
      <StarRatings
        rating={starRatings.two}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="two"
      />
      <p className={styles["Question"]}>
        How satisfied are you with the cleanliness of your apartment?
      </p>
      <StarRatings
        rating={starRatings.three}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="three"
      />
      <p className={styles["Question"]}>
        Is everything in working order (appliances, door locks, faucets, etc.)?
      </p>
      <StarRatings
        rating={starRatings.four}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="four"
      />
      <p className={styles["Question"]}>
        How satisfied are you with the community amenities available?
      </p>
      <StarRatings
        rating={starRatings.five}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="five"
      />
      <p className={styles["Question"]}>
        Overall, how satisfied are you with your new apartment?
      </p>
      <StarRatings
        rating={starRatings.six}
        starRatedColor="blue"
        starDimension="30px"
        changeRating={handleChange}
        numberOfStars={5}
        name="six"
      />
    </div>
  );
}

export default SurveyForm;
