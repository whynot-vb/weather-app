import React from "react";
import { useSelector } from "react-redux";

import { selectLatitude } from "../../features/positionSlice";
import { selectLongitude } from "../../features/positionSlice";
import "./Mapa.scss";

export default function Mapa() {
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);

  const url = `https://www.rainviewer.com/map.html?loc=${latitude},${longitude},6&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&rmt=4&c=1&o=83&lm=0&th=0&sm=1&sn=1`;

  return (
    <div className="mapa">
      <iframe
        title="kds"
        src={url}
        width="50%"
        frameBorder="0"
        style={{ border: 0, height: "60vh" }}
        allowFullScreen="false"
      ></iframe>
    </div>
  );
}
