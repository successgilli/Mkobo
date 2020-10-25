import React, { Fragment } from "react";

import Header from "../../components/Header";
import Column from "../../components/ColumnComponent";

import ImgTextSect from "../../ui/ImageTextSect";
import lovebag from "../../assets/images/love-bag.png";
import coloredHands from "../../assets/images/coloredHands.png";
import HeroSectionElem from "../../ui/LandingHeroSect";
import LivesAffectedSect from "../../ui/LandingAffectedSect";
import WhyDonate from "../../ui/WhyDonate";
import OurStorySection from "../../ui/HomeOurStory";
import Faq from "../../ui/HomeFaq";
import SubscribeSect from "../../ui/HomeSubscribe";

import "./index.scss";

const textForBag1 = (
  <Fragment>
    <h3 className="landing-page_imgtext-head">WHAT WE DO</h3>
    <span className="landing-page_imgtext-text">
      Magickobo was propelled by our passion to see the most vulnerable people
      in society have access to the opportunities that could be a turning point
      in their lives. We achieve this by creating this platform where our
      stakeholders meet, to engage and connect over shared values with a sole
      aim to exchange ideas, items, and skills.
    </span>
    <span className="landing-page_imgtext-text">
      We understand everyone has one thing or the other they do not need or
      currently utilize, and we have leveraged technology to bridge this gap.
    </span>
  </Fragment>
);

const textForBag2 = (
  <Fragment>
    <h3
      style={{ marginBottom: "1.5rem" }}
      className="landing-page_imgtext-head"
    >
      HOW WE DO IT
    </h3>
    <span className="landing-page_imgtext-text">
      By sourcing for donors who are not only willing to give items but also
      teach transferable skills to beneficiaries, through mentorship and
      personal development modules.
    </span>
    <p className="landing-page_imgtext-head2">How can I donate?</p>
    <span className="landing-page_imgtext-text">
      You can schedule a pickup and our delivery partners will come to your
      doorstep. Another option is to drop off at the locations provided.
    </span>
    <p className="landing-page_imgtext-head2">What can I donate?</p>
    <span className="landing-page_imgtext-text">
      Educational materials, books, clothing, computers, stationery, bags,
      furniture, foodstuff, beds and beddings, household items, electronics,
      scholarships and more.
    </span>
  </Fragment>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Column classname="landing-page_hero">
        <Header />
        <Column classname="landing-page_hero-form-container">
          <HeroSectionElem />
        </Column>
      </Column>
      <Column classname="landing-page_imgtext">
        <ImgTextSect img={lovebag} children={textForBag1} />
        <ImgTextSect
          reverse
          img={coloredHands}
          width="34.625rem"
          children={textForBag2}
        />
        <LivesAffectedSect />
        <WhyDonate />
        <OurStorySection />
        <Faq />
        <SubscribeSect />
        <section className="landing-page_contact-container">
          <p className="landing-page_contact-head">Contact us</p>
          <p className="landing-page_contact-body">help@magickobo.africa</p>
          <p className="landing-page_contact-body">+234 809 427 1432</p>
        </section>
      </Column>
    </div>
  );
};

export default LandingPage;
