import React from "react";

import TextComponent from "../../components/TitleText";

import "./index.scss";

const textArray = [
  {
    head: "Super Convenient",
    body:
      "You can donate reusable items from the convenience of your home. We will pick up and deliver to the people who need it the most.",
  },
  {
    head: "Transparent System",
    body:
      "We leverage on technology to provide accountability on our platform. Donations are tracked until it gets to the beneficiaries.",
  },
  {
    head: "Satisfaction",
    body:
      "Giving gives a sense of fulfilment and contentment that your items have found a new home where they will be appreciated.",
  },
  {
    head: "Book Saving Culture",
    body:
      "We promote the book saving culture by encouraging donations of neatly used books that are recycled and used by beneficiaries.",
  },
  {
    head: "Your donations are appreciated",
    body: "We make sure your donations are only given to people who need them.",
  },
];

const Why = () => {
  const text = textArray.map(({ head, body }) => (
    <TextComponent title={head} text={body} />
  ));
  return (
    <section>
      <h3 className="why-donate">WHY DONATE THROUGH MAGICKOBO?</h3>
      <div className="why-donate_text-container">{text}</div>
    </section>
  );
};

export default Why;
