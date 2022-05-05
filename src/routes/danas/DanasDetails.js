import React from "react";
import { useSelector } from "react-redux";

import "./Danas.style.scss";
import { selectDnevnaTemperatura } from "../../features/weatherSlice";
import { selectAdress } from "../../features/positionSlice";

export const selectTemperaturaFeelLike = (state) =>
  state.weather.weatherData.currently.apparentTemperature;

export const selectBrzinaVetra = (state) =>
  state.weather.weatherData.currently.windSpeed;

export const selectVlaznost = (state) =>
  state.weather.weatherData.currently.humidity;

export const selectOblacnost = (state) =>
  state.weather.weatherData.currently.cloudCover;

export const selectPritisak = (state) =>
  state.weather.weatherData.currently.pressure;

export const selectUv = (state) => state.weather.weatherData.currently.uvIndex;

export const selectVidljivost = (state) =>
  state.weather.weatherData.currently.visibility;

export const selectSummary = (state) =>
  state.weather.weatherData.currently.summary;

export default function DanasDetails() {
  const adresa = useSelector(selectAdress);
  const osecajTemperature = useSelector(selectTemperaturaFeelLike);
  const minMax = useSelector(selectDnevnaTemperatura);
  const vetar = useSelector(selectBrzinaVetra);
  const vlaznost = useSelector(selectVlaznost);
  const oblacnost = useSelector(selectOblacnost);
  const pritisak = useSelector(selectPritisak);
  const uv = useSelector(selectUv);
  const vidljivost = useSelector(selectVidljivost);
  const summary = useSelector(selectSummary);

  return (
    <div className="container trenutni-podaci" style={{ maxWidth: "660px" }}>
      <div className="row">
        <div className="col">
          <p className="adresa-text">Vreme danas u: {adresa}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="adresa-text">
            Subjektivni osećaj: {Math.round(osecajTemperature)}°C
          </p>
        </div>
        <div className="col">
          <p className="adresa-text">
            Maksimalna/Minimalna: {Math.floor(minMax.data[0].temperatureHigh)}/
            {Math.floor(minMax.data[0].temperatureLow)}°C
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            <span>
              <i className="fas fa-thermometer-half"></i>
            </span>
            {"   "}
            Maksimalna/Minimalna:{" "}
            <span>
              {Math.floor(minMax.data[0].temperatureHigh)}/
              {Math.floor(minMax.data[0].temperatureLow)}°C
            </span>
          </p>
        </div>
        <div className="col">
          <p>
            <span>
              <i className="fas fa-wind"></i>
            </span>
            {"   "}
            Vetar : <span>{vetar} km/h</span>
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
            Vlažnost : <span>{Math.round(vlaznost * 100)} % </span>
          </p>
        </div>
        <div className="col">
          <p>
            <span>
              <i className="fas fa-cloud-sun-rain"></i>
            </span>
            {"   "}
            Oblačnost : <span>{Math.floor(oblacnost * 100)} % </span>
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
            Pritisak : <span>{Math.floor(pritisak)} mb </span>
          </p>
        </div>
        <div className="col">
          <p>
            <span>
              <i className="far fa-sun"></i>
            </span>
            {"   "}
            UV indeks : <span>{uv}/10 </span>
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
            Vidljivost : <span>{vidljivost} km</span>
          </p>
        </div>
        <div className="col">
          <p>
            <span>
              <i className="fas fa-hand-point-right"></i>
            </span>
            {"   "}
            <span>{summary} </span>
          </p>
        </div>
      </div>
    </div>
  );
}
