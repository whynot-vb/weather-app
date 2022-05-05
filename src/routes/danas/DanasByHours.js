import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import getIconByName from "../../features/icons/icons";
import "./Danas.style.scss";
import { selectPoSatima, selectTimezone } from "../../features/weatherSlice";
import { convertTZ } from "../../features/timezone";

export default function DanasByHours(props) {
  const poSatima = useSelector(selectPoSatima);
  const timezone = useSelector(selectTimezone);

  const history = useHistory();

  const element = (i) => {
    return (
      <div className="col-sm" key={i}>
        <h3>{convertTZ(poSatima.data[i].time, timezone).getHours()} h</h3>
        <br />
        {getIconByName(poSatima.data[i].icon, "80px", "60px")}
        <br />
        <div className="verovatnoca-kise">
          <p>
            <span>
              <i className="fas fa-cloud-rain"></i>
            </span>{" "}
            {Math.round(poSatima.data[i].precipProbability * 100)}
            {"   "}%
          </p>
        </div>
        <br />
      </div>
    );
  };
  let row = [];
  for (let i = 0; i < 5; i++) {
    row.push(element(i));
  }

  function handleClick() {
    props.onChange("po-satima");
    history.push("/po-satima");
  }

  return (
    <div className="container trenutni-podaci" style={{ maxWidth: "660px" }}>
      <h1>Prognoza po satima</h1>
      <br />
      <div className="row">
        <div className="col-sm">{row[0]}</div>
        <div className="col-sm">{row[1]}</div>
        <div className="col-sm">{row[2]}</div>
        <div className="col-sm">{row[3]}</div>
        <div className="col-sm">{row[4]}</div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleClick}
      >
        Sledeća 24 sata
      </button>
      <br />
    </div>
  );
}
