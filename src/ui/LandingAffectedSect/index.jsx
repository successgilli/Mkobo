import React from "react";

import TextCard from "../../components/TitleText";
import Counter from "../../components/Counter";

import "./index.scss";

const SectionElem = () => {
  return (
    <section className="home-affected">
      <h1 className="home-affected_head">MILLION LIVES ADDENDUM</h1>
      <div className="home-affected_container">
        <div className="home-affected_container_item home-affected_container_item--1">
          <TextCard
            text="To enable a seamless transfer of human and material resources
          from one end-user to the other."
            title="Vision"
          />
        </div>
        <div className="home-affected_container_item home-affected_container_item--2">
          <TextCard
            text="To create informed communities by driving educational supplies to people and places where they are most needed"
            title="Mission"
          />
        </div>
        <Counter
          classname="home-affected_container_item home-affected_container_item--3"
          start={0}
          end={20}
          duration={10}
          descriptionTxt="LIVES TOUCHED"
          descriptionClass="home-affected_big-counter"
          counterClass="home-affected_big-count"
        />
        <Counter
          classname="home-affected_container_item home-affected_container_item--4"
          start={0}
          end={53}
          duration={10}
          descriptionTxt="EDUCATIONAL AIDS"
          descriptionClass="home-affected_counter"
          counterClass="home-affected_count"
        />
        <Counter
          classname="home-affected_container_item home-affected_container_item--5"
          start={0}
          end={36}
          duration={10}
          descriptionTxt="HOUSEHOLD ITEMS"
          descriptionClass="home-affected_counter"
          counterClass="home-affected_count"
        />
        <Counter
          classname="home-affected_container_item home-affected_container_item--6"
          start={0}
          end={23}
          duration={10}
          descriptionTxt="FOOD ITEMS"
          descriptionClass="home-affected_counter"
          counterClass="home-affected_count"
        />
      </div>
    </section>
  );
};

export default SectionElem;
