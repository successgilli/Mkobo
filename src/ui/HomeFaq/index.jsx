import React from "react";

import CollapseElem from "../../components/Collapsible";

import "./index.scss";

const accordionElems = [
  {
    title: "How can I become a volunteer?",
    body: (
      <h1 className="home-faq_txt">
        {" "}
        Our people are our pillars of humanity, we are bound by our tenacity of
        purpose to create an enabling environment for potentials to thrive
        during adversity. We are dauntless in our conviction to build lasting
        structures to foster an integrated system of giving.
      </h1>
    ),
  },
  {
    title: "How can I become a beneficiary",
    body: (
      <h1 className="home-faq_txt">
        {" "}
        We have a follow-up system that provides feedback to all our donors.
        However, you can choose to donate anonymously, No worr ies! We respect
        your privacy.
      </h1>
    ),
  },
  {
    title: "Are my donations private?",
    body: (
      <h1 className="home-faq_txt">
        {" "}
        We have a follow-up system that provides feedback to all our donors.
        However, you can choose to donate anonymously, No worries! We respect
        your privacy.
      </h1>
    ),
  },
];

const Faq = () => {
  return (
    <section>
      <h3 className="home-faq">FAQ</h3>
      <div className="home-faq_container">
        <CollapseElem elems={accordionElems} />
      </div>
    </section>
  );
};

export default Faq;
