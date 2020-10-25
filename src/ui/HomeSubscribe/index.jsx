import React from "react";

import SubscribeElem from "../../components/Subscribe";

import "./index.scss";

const subSect = () => {
  return (
    <section className="home-subscribe">
      <p className="home-subscribe_text1">
        Sign up for monthly news, fun promotions,
      </p>
      <span className="home-subscribe_text2">and ways to help lives!</span>
      <SubscribeElem />
    </section>
  );
};

export default subSect;
