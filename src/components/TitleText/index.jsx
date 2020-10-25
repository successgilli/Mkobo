import React, { Fragment } from "react";
import Proptypes from "prop-types";

import "./index.scss";

const TitleText = ({ title, text }) => {
  return (
    <Fragment>
      <div>
        <h1 className="home-text_head">{title}</h1>
        <p className="home-text_body">{text}</p>
      </div>
    </Fragment>
  );
};

TitleText.propTypes = {
  title: Proptypes.string,
  text: Proptypes.string,
};

TitleText.defaultProps = {
  title: "",
  text: "",
};

export default TitleText;
