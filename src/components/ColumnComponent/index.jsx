import React from "react";

import Proptypes from "prop-types";

import "./index.scss";

const column = ({ children, classname }) => (
  <section className={`column-container ${classname}`}>{children}</section>
);

column.propTypes = {
  children: Proptypes.node,
  classname: Proptypes.string,
};

column.defaultProps = {
  children: <h1>Nothing here</h1>,
  classname: "",
};

export default column;
