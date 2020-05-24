import React from "react";
import Case from "../Case/case";

import "./overview.css";

const Overview = ({ global }) => {
  return (
    <div className="card">
      <div className="card--contents">
        <div className="card--title">Global overview</div>
        <div className="cases-count">
          <Case title="Confirmed" newCase={global.NewConfirmed} totalCase={global.TotalConfirmed} />
          <Case title="Deaths" newCase={global.NewDeaths} totalCase={global.TotalDeaths} />
          <Case title="Recovered" newCase={global.NewRecovered} totalCase={global.TotalRecovered} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
