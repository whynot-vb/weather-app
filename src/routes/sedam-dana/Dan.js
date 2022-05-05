import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { selectTemperatura } from "../../features/weatherSlice";
import { getDan } from "../danas/DayElement";
import getIconByName, {
  getBackgroundByIconName,
} from "../../features/icons/icons";

export default function Dan({ dan, i }) {
  const trenutnaTemperatura = useSelector(selectTemperatura);
  let datum = new Date(dan.time * 1000);
  let danUNedelji = getDan(datum.getDay());
  let danUMesecu = datum.getDate();
  return (
    <Card>
      <Card.Header style={getBackgroundByIconName(dan.icon)}>
        <Accordion.Toggle
          as={Button}
          style={{
            width: "100%",
            listStyle: "none",
            textDecoration: "none",
            color: "black",
          }}
          variant="link"
          eventKey={`${i}`}
        >
          {" "}
          <div className="row align-items-center acordian">
            <div className="col">
              <i
                className="fas fa-arrows-alt-v fa-2x"
                style={{ marginTop: "10px" }}
              ></i>
            </div>
            <div className="col" style={{ marginTop: "10px" }}>
              <p>
                {danUNedelji} <span>{danUMesecu}</span>
              </p>
            </div>
            <div className="col" style={{ marginTop: "10px" }}>
              <p>
                <strong>{Math.floor(dan.temperatureHigh)}</strong>/
                {Math.floor(dan.temperatureLow)}°
              </p>
            </div>
            <div className="col-4" style={{ marginTop: "10px" }}>
              <p>
                {getIconByName(dan.icon, "60px", "45px")}
                <span>{dan.summary}</span>
              </p>
            </div>
            <div className="col-2" style={{ marginTop: "10px" }}>
              <i className="fas fa-cloud-rain"></i>{" "}
              <span>{Math.round(dan.precipProbability * 100)} %</span>
            </div>
            <div className="col-2" style={{ marginTop: "10px" }}>
              <p>
                <i className="fas fa-wind"></i> {dan.windSpeed} km/h
              </p>
            </div>
          </div>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={`${i}`}>
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-3">
              <h2>{Math.floor(trenutnaTemperatura)}°</h2>
            </div>
            <div className="col-3">
              {getIconByName(dan.icon, "80px", "60px")}
            </div>
            <div className="col-3" style={{ marginTop: "10px" }}>
              <i className="fas fa-cloud-rain"></i>{" "}
              <span>{Math.round(dan.precipProbability * 100)} %</span>
            </div>
            <div className="col-3" style={{ marginTop: "10px" }}>
              <p>
                <i className="fas fa-wind"></i> {dan.windSpeed} km/h
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 ">
              <p>
                {dan.summary}. Očekuje se da najviša dnevna temperatura bude{" "}
                {Math.floor(dan.temperatureHigh)}° u{" "}
                {new Date(dan.temperatureHighTime * 1000).getHours()} h. Očekuje
                se da najniža temperatura bude {Math.floor(dan.temperatureLow)}°
                u {new Date(dan.temperatureLowTime * 1000).getHours()} h.
                Najjači vetar se očekuje oko{" "}
                {new Date(dan.windGustTime * 1000).getHours()} h i duvaće
                brzinom {dan.windGust} km/h.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-tint"></i> Vlažnost:{" "}
                      {dan.humidity * 100} %
                    </td>
                    <td>
                      <i className="far fa-sun"></i> Uv indeks: {dan.uvIndex}
                      /10 u {new Date(dan.uvIndexTime * 1000).getHours()} h
                    </td>
                    <td>
                      <i className="fas fa-cloud-sun"></i> Izlazak sunca:{" "}
                      {new Date(dan.sunriseTime * 1000).getHours()}:
                      {new Date(dan.sunriseTime * 1000).getMinutes() < 10
                        ? `0${new Date(dan.sunriseTime * 1000).getMinutes()}`
                        : `${new Date(dan.sunriseTime * 1000).getMinutes()}`}
                      h
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-compress-arrows-alt"></i> Pritisak:{" "}
                      {dan.pressure} mbar
                    </td>
                    <td>
                      <i className="fas fa-cloud"></i> Prosečna oblečnost:{" "}
                      {Math.floor(dan.cloudCover * 100)}%
                    </td>
                    <td>
                      <i className="fas fa-cloud-moon"></i> Zalazak sunca:{" "}
                      {new Date(dan.sunsetTime * 1000).getHours()}:
                      {new Date(dan.sunsetTime * 1000).getMinutes() < 10
                        ? `0${new Date(dan.sunsetTime * 1000).getMinutes()}`
                        : `${new Date(dan.sunsetTime * 1000).getMinutes()}`}
                      h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}
