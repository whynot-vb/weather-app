import React from "react";

import getIconByName from "../../features/icons/icons";
import "./Danas.style.scss";

export const getDan = (day) => {
  switch (day) {
    case 6: {
      return "Sub";
    }
    case 0: {
      return "Ned";
    }
    case 1: {
      return "Pon";
    }
    case 2: {
      return "Uto";
    }
    case 3: {
      return "Sre";
    }
    case 4: {
      return "Čet";
    }
    case 5: {
      return "Pet";
    }
    default:
      return;
  }
};

export default function DayElement({ dan, i }) {
  let datum = new Date(dan.time * 1000);
  return (
    <div className="col-sm" key={i}>
      <h3>
        {datum.getDate()} {getDan(datum.getDay())}
      </h3>
      <br />
      <h3>{Math.floor(dan.temperatureHigh)} °C</h3>
      <br />
      <h4>{Math.floor(dan.temperatureLow)} °C</h4>
      <br />
      {getIconByName(dan.icon, "80px", "60px")}
      <br />
      <div>
        <p>
          <span>
            <i className="fas fa-cloud-rain"></i>
          </span>{" "}
          {Math.round(dan.precipProbability * 100)}
          {"   "}%
        </p>
      </div>
      <br />
    </div>
  );
}
