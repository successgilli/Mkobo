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
}) => {
  return (
    <Fragment>
      {labelText && (
        <label style={labelStyle} htmlFor="j">
          {labelText}
        </label>
      )}
      <InputGroup>
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
        {rightChild && <InputRightElement children={rightChild} />}
      </InputGroup>
    </Fragment>
  );
};
// {<Icon name="check" color="green.500" />}

InputComponent.propTypes = {
  labelText: Proptypes.string.isRequired,
  inputStyle: Proptypes.shape({}),
};

InputComponent.defaultProps = {
  inputStyle: {},
};

export default InputComponent;
