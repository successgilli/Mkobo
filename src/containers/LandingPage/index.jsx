import React from "react";

import { Divider } from "@chakra-ui/core";

import Header from "../../components/Header";
import Column from "../../components/ColumnComponent";
import DonationForm from "../../components/DonationForm";

import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Column classname="landing-page_hero">
        <Header />
        <Column classname="landing-page_hero-form-container">
          <div className="landing-page_hero-left">
            <div className="landing-page_hero-left-name">
              {"Magickobo"}
              <Divider textAlign="left" marginLeft="0" width="85%" />
            </div>
            <p className="landing-page_hero-left-title">
              Make Dreams{" "}
              <span className="landing-page_hero-left-title2">Come Alive!</span>
            </p>
            <p className="landing-page_hero-left-title3">
              Your donation is the magic in our world.
            </p>
          </div>
          <div className="landing-page_hero-right">
            <DonationForm />
          </div>
        </Column>
      </Column>
    </div>
  );
};

export default LandingPage;
