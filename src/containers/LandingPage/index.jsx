import React from "react";

import Header from "../../components/Header";
import Column from "../../components/ColumnComponent";

import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Column>
        <Header />
      </Column>
    </div>
  );
};

export default LandingPage;
