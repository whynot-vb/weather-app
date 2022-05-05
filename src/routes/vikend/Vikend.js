import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";

import { selectNizPoDanima } from "../../features/weatherSlice";

import Dan from "../sedam-dana/Dan";

export default function Vikend() {
  const daniUNizu = useSelector(selectNizPoDanima);

  const prikazUListi = daniUNizu
    .slice(0, 9)
    .filter(
      (dan) =>
        new Date(dan.time * 1000).getDay() === 0 ||
        new Date(dan.time * 1000).getDay() === 5 ||
        new Date(dan.time * 1000).getDay() === 6
    )
    .map((dan, i) => {
      let datum = new Date(dan.time * 1000);

      let danUMesecu = datum.getDate();
      console.log(danUMesecu, i);
      return <Dan key={i} dan={dan} i={i} />;
    });
  return (
    <div className="container" style={{ maxWidth: "680px" }}>
      <Accordion defaultActiveKey="0">{prikazUListi}</Accordion>
    </div>
  );
}
