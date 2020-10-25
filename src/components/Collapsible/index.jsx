import React, { Fragment, useRef, useEffect, useState } from "react";
import Proptypes from "prop-types";

import { Collapse } from "@chakra-ui/core";

import Button from "../Button";

import "./index.scss";

const btnStyle = {
  cursor: "pointer",
  color: "green",
  border: 0,
  borderBottom: "1px solid rgba(220,220,220, 0.3)",
  outline: 0,
  padding: "2.544rem 1rem 2.544rem 0",
  backgroundColor: "transparent",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  fontSize: "1.3rem",
  fontFamily: "MontserratBold",
};

const textStyle = {
  color: "#3E4C5B",
  fontSize: "1.375rem",
  fontFamily: "MontserratBold",
  lineHeight: "2.125rem",
};

const collapseElem = ({ elems }) => {
  const [acordionTracker, setAccordionTracker] = useState({});
  const refs = [];
  let openTracker = {};

  const handleClick = (uniqueString) => {
    setAccordionTracker((currentState) => ({
      ...Object.keys(currentState).reduce((acc, item) => {
        return { ...acc, [item]: false };
      }, {}),
      [uniqueString]: true,
    }));
  };
  useEffect(() => {
    setAccordionTracker(() => openTracker);
  }, []);

  const accordions = elems.map(({ title, body }, index) => {
    const elem = useRef();
    openTracker[title] = index === elems.length - 1;

    const accordion = (
      <div className="collapsible-main">
        <Button
          onclick={() => handleClick(title)}
          rightIcon={acordionTracker[title] ? "minus" : "add"}
          textStyle={textStyle}
          btnStyle={btnStyle}
          text={title}
        />
        <Collapse
          ref={elem}
          className="collapsible"
          mt={4}
          isOpen={acordionTracker[title] || false}
        >
          {body}
        </Collapse>
      </div>
    );

    refs.push(elem);

    return accordion;
  });
  return <Fragment>{accordions}</Fragment>;
};

collapseElem.propTypes = {
  elems: Proptypes.shape({
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
  }),
};

collapseElem.defaultProps = {
  elems: [],
};

export default collapseElem;
