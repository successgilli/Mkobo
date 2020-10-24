import React from "react";
import Proptypes from "prop-types";

import "./index.scss";
const stylere = {
  flexDirection: "row-reverse",
};

const imgTextSect = ({ img, children, reverse, width }) => {
  return (
    <div style={reverse ? stylere : {}} className="img-text-sect">
      <img className="img-text-sect_img" src={img} alt="" srcset="" />
      <div style={width ? { width } : {}} className="img-text-sect_text">
        {children}
      </div>
    </div>
  );
};

imgTextSect.propTypes = {
  img: Proptypes.string,
  children: Proptypes.node,
  reverse: Proptypes.bool,
  width: Proptypes.string,
};

imgTextSect.defaultProps = {
  img: "",
  children: "",
  reverse: false,
  width: "",
};

export default imgTextSect;
