import React from "react";
import Proptypes from "prop-types";

import { Button } from "@chakra-ui/core";

const Btn = ({ text, btnStyle }) => {
  return <Button style={btnStyle}>{text}</Button>;
};

Btn.propTypes = {
  text: Proptypes.string,
  btnStyle: Proptypes.shape({}),
};

Btn.defaultProps = {
  text: "",
  btnStyle: {},
};

export default Btn;
