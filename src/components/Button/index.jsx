import React from "react";
import Proptypes from "prop-types";

import { Button } from "@chakra-ui/core";

const Btn = ({ onclick, text, btnStyle, textStyle, rightIcon }) => {
  return (
    <Button
      onClick={onclick}
      rightIcon={rightIcon ? rightIcon : ""}
      style={btnStyle}
    >
      <span style={textStyle}>{text}</span>
    </Button>
  );
};

Btn.propTypes = {
  text: Proptypes.string,
  btnStyle: Proptypes.shape({}),
  textStyle: Proptypes.shape({}),
  rightIcon: Proptypes.string,
  onclick: Proptypes.func,
};

Btn.defaultProps = {
  text: "",
  btnStyle: {},
  textStyle: {},
  rightIcon: "",
  onclick: () => {},
};

export default Btn;
