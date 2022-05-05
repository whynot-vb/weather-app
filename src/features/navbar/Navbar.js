import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Danas from "../../routes/danas/Danas";
import PoSatima from "../../routes/po-satima/PoSatima";
import DesetDana from "../../routes/sedam-dana/DesetDana";
import Vikend from "../../routes/vikend/Vikend";
import Proslost from "../../routes/proslost/Proslost";
import Mapa from "../../routes/mapa/Mapa";
import Juce from "../../routes/juce/Juce";
import { convertTZ } from "../timezone";
import { selectCoordinates } from "../positionSlice";
import {
  showWeather,
  showWeatherByInputDate,
  selectSunrise,
  selectSunset,
  selectTimezone,
} from "../weatherSlice";

const customStyles = {
  content: {
    top: "30%",
    right: "20%",
    left: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Navbar = () => {
  const sunriseTime = useSelector(selectSunrise);
  const sunsetTime = useSelector(selectSunset);
  const timezone = useSelector(selectTimezone);
  const sunrise = `${convertTZ(sunriseTime, timezone).getHours()}: ${
    convertTZ(sunriseTime, timezone).getMinutes() < 10
      ? `0${convertTZ(sunriseTime, timezone).getMinutes()}`
      : `${convertTZ(sunriseTime, timezone).getMinutes()}`
  } h`;
  const sunset = `${convertTZ(sunsetTime, timezone).getHours()}: ${
    convertTZ(sunsetTime, timezone).getMinutes() < 10
      ? `0${convertTZ(sunsetTime, timezone).getMinutes()}`
      : `${convertTZ(sunsetTime, timezone).getMinutes()}`
  } h`;
  const pozicija = useSelector(selectCoordinates);
  const { latitude, longitude } = pozicija;
  const dispatch = useDispatch();
  const time = Math.round(Date.now() / 1000 - 24 * 3600);

  const [routes, setRoutes] = useState("danas");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [juceActivan, setIsJuceAktivan] = useState(false);

  const setDispachOnRoutes = () => {
    if (
      routes === "proslost-buducnost" ||
      (routes === "dodatne" && juceActivan)
    ) {
      dispatch(showWeather(latitude, longitude));
    }
  };

  const handleDanasClick = () => {
    setDispachOnRoutes();
    setRoutes("danas");
  };

  const handlePoSatimaClick = () => {
    setDispachOnRoutes();
    setRoutes("po-satima");
  };

  const handleSedamDanaClick = () => {
    setDispachOnRoutes();
    setRoutes("sedam-dana");
  };

  const handleVikendVremeClick = () => {
    setDispachOnRoutes();
    setRoutes("vikend");
  };

  const handleVremeUProslostiClick = () => {
    setRoutes("proslost-buducnost");
  };

  const handleNadjiNaMapiClick = () => {
    setRoutes("mapa");
  };
  const handleDodatneInfoClick = () => {
    setRoutes("dodatne");
    setIsOpen(true);
  };

  const activeRoute = (myRoute) => {
    return `${routes === myRoute ? "active" : ""}`;
  };

  function closeModal() {
    setIsOpen(!modalIsOpen);
  }

  function handleJuceAktivan() {
    dispatch(showWeatherByInputDate(latitude, longitude, time));
    setIsJuceAktivan(true);
    setIsOpen(false);
  }

  function handleRouteChange(newRoute) {
    setRoutes(newRoute);
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={`nav-item nav-link ${activeRoute("danas")}`}
              to="/"
              onClick={handleDanasClick}
            >
              Danas
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute("po-satima")}`}
              to="/po-satima"
              onClick={handlePoSatimaClick}
            >
              Po satima
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute("sedam-dana")}`}
              to="/sedam-dana"
              onClick={handleSedamDanaClick}
            >
              Prognoza za narednih 7 dana
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute("vikend")}`}
              to="/vikend"
              onClick={handleVikendVremeClick}
            >
              Vikend
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute(
                "proslost-buducnost"
              )}`}
              to="/proslost-buducnost"
              onClick={handleVremeUProslostiClick}
            >
              Prošlost/Budućnost
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute("mapa")}`}
              to="/mapa"
              onClick={handleNadjiNaMapiClick}
            >
              Mape
            </Link>

            <Link
              className={`nav-item nav-link ${activeRoute("dodatne")}`}
              to="/dodatne"
              onClick={handleDodatneInfoClick}
            >
              Dodatne Info{" "}
              <span>
                <i className="fas fa-sort-down"></i>
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <br />
      <Switch>
        <Route exact path="/">
          <Danas routes={routes} onChange={handleRouteChange} />
        </Route>
        <Route exact path="/po-satima">
          <PoSatima routes={routes} onChange={handleRouteChange} />
        </Route>
        <Route exact path="/sedam-dana">
          <DesetDana routes={routes} onChange={handleRouteChange} />
        </Route>
        <Route exact path="/vikend">
          <Vikend />
        </Route>
        <Route exact path="/proslost-buducnost">
          <Proslost />
        </Route>
        <Route exact path="/mapa">
          <Mapa />
        </Route>
      </Switch>
      {routes === "dodatne" && (
        <>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="container">
              <div className="row">
                <div className="col-12" onClick={handleJuceAktivan}>
                  <button className="btn btn-outline-primary">
                    <i className="fas fa-arrow-down"></i>
                    <span>Vreme juce</span>
                  </button>
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-6">
                  <span>Geografska sirina</span>: {latitude.toFixed(5)}
                </div>
                <div className="col-6">
                  <span>Geografska dužina</span>: {longitude.toFixed(5)}
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-6">
                  <span>Izlazak sunca: </span>:<i className="bi bi-sunrise"></i>{" "}
                  {sunrise}
                </div>
                <div className="col-6">
                  <span>Zalazak sunca: </span>:<i className="bi bi-sunset"></i>{" "}
                  {sunset}
                </div>
              </div>
            </div>
          </Modal>
          {juceActivan && <Juce />}
        </>
      )}
    </Router>
  );
};

export default Navbar;
