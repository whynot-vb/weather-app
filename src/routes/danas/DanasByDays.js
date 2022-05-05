import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import DayElement from "./DayElement";
import "./Danas.style.scss";
import { selectNizPoDanima } from "../../features/weatherSlice";

export default function DanasByDays(props) {
  const history = useHistory();
  const daniUNizu = useSelector(selectNizPoDanima);
  const prikazUListi = daniUNizu.slice(0, 5).map((dan, i) => {
    return <DayElement key={i} dan={dan} i={i} />;
  });

  function handleClick() {
    props.onChange("sedam-dana");
    history.push("/sedam-dana");
  }

  return (
    <div className="container  trenutni-podaci" style={{ maxWidth: "660px" }}>
      <h1>Prognoza po danima</h1>
      <div className="row">{prikazUListi}</div>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleClick}
      >
        Sledećih 7 dana
      </button>
      <br />
    </div>
  );
}
