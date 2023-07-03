import React from "react";
import styles from "./Input.module.css";

function isInvalid({ valid, shouldValidate, touched }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || "text";
  const htmlFor = `${inputType}-${Math.random()}`;
  const cls = [styles.Input];

  if (isInvalid(props)) {
    cls.push(styles.invalid);
  }

  return (
    <div className={cls.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;
