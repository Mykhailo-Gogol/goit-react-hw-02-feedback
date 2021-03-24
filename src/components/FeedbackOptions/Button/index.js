import React from "react";
import * as s from "../FeedbackOptions.module.css";

const Button = ({ func }) => {
  return (
    <button onClick={() => func()} className={s.button} type="button">
      good
    </button>
  );
};

export default Button;