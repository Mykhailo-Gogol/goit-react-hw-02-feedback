import React from "react";
import s from "./FeedbackOptions.module.css";

const Button = ({ func, buttonTitle }) => {
  return (
    <button onClick={() => func()} className={s.button} type="button">
      {buttonTitle}
    </button>
  );
};

export default Button;
