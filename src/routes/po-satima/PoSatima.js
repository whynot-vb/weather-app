import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import { selectNizPoSatima, selectTimezone } from "../../features/weatherSlice";
import getIconByName, {
  getBackgroundByIconName,
} from "../../features/icons/icons";
import { convertTZ } from "../../features/timezone";
import "./PoSatima.scss";

export default function PoSatima(props) {
  const timezone = useSelector(selectTimezone);
  const history = useHistory();
  const poSatimaArray = useSelector(selectNizPoSatima);

  const prikazUListi = poSatimaArray.slice(0, 24).map((poSatu, i) => {
    return (
      <Card key={i}>
        <Card.Header style={getBackgroundByIconName(poSatu.icon)}>
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
            <div className="row align-items-center acordian">
              <div className="col">
                <i
                  className="fas fa-arrows-alt-v fa-2x"
                  style={{ marginTop: "10px" }}
                ></i>
              </div>
              <div className="col" style={{ marginTop: "10px" }}>
                <p>{convertTZ(poSatu.time, timezone).getHours()} h</p>
              </div>
              <div className="col-2" style={{ marginTop: "10px" }}>
                {getIconByName(poSatu.icon, "60px", "45px")}
              </div>
              <div className="col-2" style={{ marginTop: "10px" }}>
                <h4>{Math.floor(poSatu.temperature)}°</h4>
              </div>
              <div className="col-2" style={{ marginTop: "10px" }}>
                {poSatu.summary}
              </div>
              <div className="col-2" style={{ marginTop: "10px" }}>
                <i className="fas fa-tint"></i>{" "}
                <span>{Math.round(poSatu.precipProbability * 100)} %</span>
              </div>
              <div className="col-2" style={{ marginTop: "10px" }}>
                <p>
                  <i className="fas fa-wind"></i> {poSatu.windSpeed} km/h
                </p>
              </div>
            </div>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={`${i}`}>
          <Card.Body>
            <div className="row align-items-center">
              <div className="col podaci">
                <p>
                  <span>
                    <i className="fas fa-thermometer-half"></i>
                  </span>
                  {"  "}
                  Subjektivni osećaj: {Math.floor(poSatu.apparentTemperature)}°
                </p>
              </div>
              <div className="col podaci">
                <p>
                  <i className="fas fa-wind"></i> {poSatu.windSpeed} km/h
                </p>
              </div>
              <div className="col podaci">
                <p>
                  <i className="fas fa-tint"></i>Vlažnost:{" "}
                  {Math.round(poSatu.humidity * 100)} %
                </p>
              </div>
              <div className="col podaci">
                <p>
                  <span>
                    <i className="far fa-sun"></i>
                  </span>
                  {"   "}
                  UV indeks : <span>{poSatu.uvIndex}/10 </span>
                </p>
              </div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  function handleClick() {
    props.onChange("sedam-dana");
    history.push("/sedam-dana");
  }

  return (
    <div className="container po-satima" style={{ maxWidth: "680px" }}>
      <Accordion defaultActiveKey="0">{prikazUListi}</Accordion>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleClick}
      >
        Vreme za 7 dana
      </button>
    </div>
  );
}
