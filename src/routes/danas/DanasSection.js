import React from "react";
import { useSelector } from "react-redux";

import getIconByName, {
  getBackgroundByIconName,
} from "../../features/icons/icons";
import "./Danas.style.scss";
import { selectSummary } from "./DanasDetails";
import {
  selectTemperatura,
  selectCurrentTime,
  selectVerovatnocaPadavina,
  selectDnevnaTemperatura,
  selectIcon,
  selectTimezone,
} from "../../features/weatherSlice";
import { convertTZ } from "../../features/timezone";

import { selectAdress } from "../../features/positionSlice";

export default function DanasSection() {
  const adresa = useSelector(selectAdress);
  const temperatura = useSelector(selectTemperatura);
  const verovatnocaPadavina = useSelector(selectVerovatnocaPadavina);
  const minMaxTemperatura = useSelector(selectDnevnaTemperatura);
  const myIcon = useSelector(selectIcon);
  const vremeTrenutno = useSelector(selectCurrentTime);
  const summary = useSelector(selectSummary);
  const timezone = useSelector(selectTimezone);

  const validanDatumZaVremenskuZonu = convertTZ(vremeTrenutno, timezone);

  return (
    <div
      className="container"
      id="sekcija"
      style={getBackgroundByIconName(myIcon)}
    >
      <div className="row">
        <div className="col-7">
          <h2>{adresa}</h2>
          <h4>
            Vreme: {validanDatumZaVremenskuZonu.getHours()}:
            {validanDatumZaVremenskuZonu.getMinutes() < 10
              ? `0${validanDatumZaVremenskuZonu.getMinutes()}`
              : validanDatumZaVremenskuZonu.getMinutes()}
          </h4>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-8">
          <h1 style={{ fontSize: "4rem" }}>{Math.floor(temperatura)}°C</h1>
        </div>
        <div className="col-4">{getIconByName(myIcon, "100px", "80px")}</div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <h2>{summary}</h2>
        </div>
        <div className="col-5">
          <h2>{Math.floor(verovatnocaPadavina * 100)}% verovatnoća padavina</h2>
        </div>
        <div className="col">
          <h2>
            {" "}
            Maks/Min: {Math.floor(minMaxTemperatura.data[0].temperatureHigh)}/
            {Math.floor(minMaxTemperatura.data[0].temperatureLow)}°C
          </h2>
        </div>
      </div>
    </div>
  );
}
