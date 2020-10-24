import React from "react";

import Input from "../Input";
import Button from "../Button";
import fields from "./fields";

import "./index.scss";

const inputStyle = {
  background: "#F5F5F5 0% 0% no-repeat padding-box",
  border: 0,
  height: "3.5rem",
  color: "#3E4C5B",
  fontFamily: "MontserratMedium",
  fontSize: "1.13rem",
};

const labelStyle = {
  color: "#9AA8B6",
  fontFamily: "MontserratRegular",
  fontSize: "0.913rem",
  marginBottom: "0.531rem",
  marginTop: "1.5rem",
  display: "block",
};

const btnStyle = {
  backgroundColor: "#23CF5F",
  color: "#FFFFFF",
  fontFamily: "MontserratBold",
  fontSize: "1.375rem",
  border: 0,
  height: "4.469rem",
  width: "100%",
  marginTop: "3.813rem",
};

const formElem = () => {
  const inputs = fields.map((item) => (
    <Input
      labelText={item.label}
      labelStyle={labelStyle}
      placeholderText={item.placeholder}
      inputClass="donation-form_input"
      inputStyle={inputStyle}
      type={item.type}
    />
  ));

  return (
    <form className="donation-form" action="">
      <h3 className="donation-form_title">DONATE TODAY</h3>
      {inputs}
      <Button text="DONATE" btnStyle={btnStyle} />
    </form>
  );
};

export default formElem;
