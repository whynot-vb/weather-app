import React from "react";
import { useSelector } from "react-redux";

import "./Juce.scss";

import {
  selectDnevnaTemperatura,
  selectDailyIcon,
} from "../../features/weatherSlice";
import { selectAdress } from "../../features/positionSlice";
import getIconByName, {
  getBackgroundByIconName,
} from "../../features/icons/icons";

export default function Juce() {
  const adresa = useSelector(selectAdress);
  const dnevna = useSelector(selectDnevnaTemperatura);
  const dnevnaIkona = useSelector(selectDailyIcon);

  return (
    <>
      <div
        className="container trenutni-podaci"
        style={getBackgroundByIconName(dnevnaIkona)}
      >
        <div className="row">
          <div className="col">
            <h2>Vreme za jučerašnji dan u: {adresa}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>{dnevna.data[0].summary}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {getIconByName(dnevna.data[0].icon, "60px", "45px")}
          </div>
          <div className="col-6">
            <p>
              Maksimalna/Minimalna: {Math.floor(dnevna.data[0].temperatureHigh)}
              /{Math.floor(dnevna.data[0].temperatureLow)}°C
            </p>
          </div>
        </div>
        <div className="row uprow">
          <div className="col">
            <p>
              <span>
                <i className="fas fa-thermometer-half"></i>
              </span>
              {"   "}
              Subjektivni osećaj :{" "}
              <span>
                {Math.floor(dnevna.data[0].apparentTemperatureMax)}/
                {Math.floor(dnevna.data[0].apparentTemperatureMin)}°C
              </span>
            </p>
          </div>
          <div className="col">
            <p>
              <span>
                <i className="fas fa-wind"></i>
              </span>
              {"   "}
              Vetar : <span>{dnevna.data[0].windSpeed} km/h</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <span>
                <i className="fas fa-tint"></i>
              </span>
              {"   "}
              Vlažnost :{" "}
              <span>{Math.floor(dnevna.data[0].humidity * 100)} % </span>
            </p>
          </div>
          <div className="col">
            <p>
              <span>
                <i className="fas fa-cloud-sun-rain"></i>
              </span>
              {"   "}
              Oblačnost :{" "}
              <span>{Math.floor(dnevna.data[0].cloudCover * 100)} % </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <span>
                <i className="fas fa-arrows-alt-v"></i>
              </span>
              {"   "}
              Pritisak : <span>{dnevna.data[0].pressure} mbar </span>
            </p>
          </div>
          <div className="col">
            <p>
              <span>
                <i className="far fa-sun"></i>
              </span>
              {"   "}
              UV indeks : <span>{dnevna.data[0].uvIndex}/10 </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <span>
                <i className="fas fa-eye"></i>
              </span>
              {"   "}
              Vidljivost : <span>{dnevna.data[0].visibility} km</span>
            </p>
          </div>
          <div className="col">
            <p>
              <span>
                <i className="fas fa-hand-point-right"></i>
              </span>
              {"   "}
              <span>{Math.floor(dnevna.data[0].cloudCover * 100)}% </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
