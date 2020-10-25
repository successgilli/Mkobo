import React from "react";

import booksImg from "../../assets/images/books-table.png";

import "./index.scss";

const ourStory = () => {
  return (
    <section>
      <h3 className="our-story">OUR STORY</h3>
      <div>
        <img className="our-story_img" src={booksImg} alt="" srcset="" />
        <p className="our-story_story">
          Magickobo believes that a little help can go a long way in
          transforming lives. The clothes that would not fit anymore, those
          books that are gathering dust in your study, the bicycle you have
          outgrown, they would mean the world to someone out there.
          <br />
          <span>
            We all dreamt as kids of a magician who could make all our wishes
            come true, then we became adults and realized you can only have
            magic when you create it. Are you willing to be that person who
            makes their old and neglected stuff come alive in a new home? Would
            you like someone to pick-up your items from your home/office?
            <br />
          </span>
          <span>
            If this sounds like you, look no further. Magickobo is here to help.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ourStory;
