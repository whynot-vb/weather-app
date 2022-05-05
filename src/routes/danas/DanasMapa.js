import React from "react";
import { useSelector } from "react-redux";

import { selectLatitude, selectLongitude } from "../../features/positionSlice";

export default function DanasMapa() {
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);

  return (
    <div className="container trenutni-podaci" style={{ maxWidth: "660px" }}>
      {latitude && longitude && (
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&maptype=roadmap&zoom=12&size=640x400&sensor=false&markers=color:red%7C${latitude},${longitude}&key=AIzaSyCOL799XlubGFKIrX73uFYqUYHX-Xqit7U`}
          alt=""
        />
      )}
    </div>
  );
}
