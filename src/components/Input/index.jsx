import React, { Fragment } from "react";
import Proptypes from "prop-types";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/core";

const InputComponent = ({
  labelText,
  labelStyle,
  inputStyle,
  placeholderText,
  inputClass,
  rightChild,
  leftChild,
  type,
  containerStyle,
  InputRightStyle,
}) => {
  return (
    <Fragment>
      {labelText && (
        <label style={labelStyle} htmlFor="j">
          {labelText}
        </label>
      )}
      <InputGroup style={containerStyle}>
        {leftChild && (
          <InputLeftElement
            color="gray.300"
            fontSize="1.2em"
            children={leftChild}
          />
        )}
        <Input
          type={type}
          className={inputClass}
          style={inputStyle}
          id="j"
          placeholder={placeholderText}
        />
        {rightChild && (
          <InputRightElement
            boxSizing="border-box"
            style={InputRightStyle}
            children={rightChild}
          />
        )}
      </InputGroup>
    </Fragment>
  );
};

InputComponent.propTypes = {
  labelText: Proptypes.string.isRequired,
  inputStyle: Proptypes.shape({}),
  labelStyle: Proptypes.shape({}),
  placeholderText: Proptypes.string,
  inputClass: Proptypes.string,
  rightChild: Proptypes.node,
  leftChild: Proptypes.node,
  type: Proptypes.string,
  containerStyle: Proptypes.shape({}),
  InputRightStyle: Proptypes.shape({}),
};

InputComponent.defaultProps = {
  inputStyle: {},
  type: "text",
  labelStyle: {},
  rightChild: null,
  leftChild: null,
  placeholderText: "",
  containerStyle: {},
  InputRightStyle: {},
};

export default InputComponent;
