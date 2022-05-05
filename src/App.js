import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import scriptLoader from "react-async-script-loader";

// import Loading from "./Loading";
import SearchBar from "./features/searchBar/SearchBar";
import BasicInfo from "./features/basicInfo/BasicInfo";
import Navbar from "./features/navbar/Navbar";
import Footer from "./features/footer/Footer";
import { showWeather, selectWeatherStatus } from "./features/weatherSlice";
import { getAppBackgroundByIconName } from "./features/icons/icons";
import { selectIcon } from "./features/weatherSlice";

import "./App.scss";

function App({ isScriptLoaded, isScriptLoadSucceed }) {
  const icon = useSelector(selectIcon);
  // const weatherStatus = useSelector(selectWeatherStatus);
  const dispatch = useDispatch();
  console.log(icon);

  function handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;
        dispatch({
          type: "position/positionLoaded",
          payload: { latitude, longitude },
        });
        if (latitude && longitude) {
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAP_API_}`
          )
            .then((response) => response.json())
            .then((data) =>
              dispatch({
                type: "position/adressLoaded",
                payload: data?.results[0]?.formatted_address,
              })
            );

          dispatch(showWeather(latitude, longitude));
        }
      }, handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }, []);
  // if (weatherStatus === "loading") {
  //   return <Loading />;
  // }
  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <div
        className="App"
        style={{ backgroundImage: `url(${getAppBackgroundByIconName(icon)})` }}
      >
        <SearchBar />
        <BasicInfo />
        <Navbar />
        <Footer />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_}&libraries=places`,
])(App);
