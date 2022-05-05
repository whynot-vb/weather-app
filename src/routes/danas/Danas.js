import React from "react";

import DanasSection from "./DanasSection";
import DanasDetails from "./DanasDetails";
import DanasByHours from "./DanasByHours";
import DanasByDays from "./DanasByDays";
import DanasMapa from "./DanasMapa";

export default function Danas(props) {
  return (
    <>
      <DanasSection />
      <DanasDetails />
      <DanasByHours onChange={props.onChange} />
      <DanasByDays onChange={props.onChange} />
      <DanasMapa />
    </>
  );
}
