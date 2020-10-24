import React, { Fragment } from "react";

import { Divider } from "@chakra-ui/core";

import DonationForm from "../../components/DonationForm";

import "./index.scss";

const sectionElem = () => {
  return (
    <Fragment>
      <div className="landing-hero-sect_hero-left">
        <div className="landing-hero-sect_hero-left-name">
          {"Magickobo"}
          <Divider textAlign="left" marginLeft="0" width="85%" />
        </div>
        <p className="landing-hero-sect_hero-left-title">
          Make Dreams{" "}
          <span className="landing-hero-sect_hero-left-title2">
            Come Alive!
          </span>
        </p>
        <p className="landing-hero-sect_hero-left-title3">
          Your donation is the magic in our world.
        </p>
      </div>
      <div className="landing-hero-sect_hero-right">
        <DonationForm />
      </div>
    </Fragment>
  );
};

export default sectionElem;
