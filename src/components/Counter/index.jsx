import React, { Fragment } from "react";

import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const Counter = ({
  descriptionClass,
  start,
  end,
  formatFunc,
  duration,
  descriptionTxt,
  counterClass,
  classname,
}) => {
  return (
    <Fragment>
      <div className={classname}>
        <span className={counterClass}>
          <TrackVisibility>
            {({ isVisible }) =>
              isVisible && (
                <CountUp
                  start={start}
                  end={end}
                  duration={duration}
                  formattingFn={formatFunc}
                />
              )
            }
          </TrackVisibility>
        </span>
        <h3 className={descriptionClass}>{descriptionTxt}</h3>
      </div>
    </Fragment>
  );
};

export default Counter;
