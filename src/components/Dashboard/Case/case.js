import React from "react";
import CountUp from "react-countup";

import "./case.css";

const Case = ({ title='', totalCase=0, newCase=0 }) => {
  return (
    <div className="case">
      <div className="case--title">{title}</div>
        <div className="case--count">
          <CountUp end={totalCase} />
        </div>
        <div className="case--new">+ {newCase} new cases</div>
    </div>
  );
};

export default Case;
