import React from "react";

import Input from "../Input";
import Button from "../Button";

import "./index.scss";

const inputContainerStyle = {
  width: "44.375rem",
  margin: "auto",
};
const inputStyle = {
  height: "4.688rem",
  boxSizing: "borderBox",
  backgroundColor: "#F4F4F4",
  color: "#61788E",
  fontFamily: "MontserratRegular",
  border: 0,
};
const inputRightStyle = {
  width: "10rem",
  height: "100%",
  padding: "0.313rem",
  boxSizing: "borderBox",
};

const btnStyle = {
  width: "100%",
  border: 0,
  color: "white",
  backgroundColor: "#0FBF4C",
  height: "100%",
};

const Subscribe = () => {
  return (
    <Input
      type="email"
      inputClass="subscribe_input"
      InputRightStyle={inputRightStyle}
      containerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      placeholderText="Enter your email address"
      rightChild={<Button btnStyle={btnStyle} text="SUBSCRIBE" />}
    />
  );
};

export default Subscribe;
