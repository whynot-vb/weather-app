import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

import { selectCurrentTime } from "../weatherSlice";
import { showWeather } from "../weatherSlice";
import "./SearchBar.scss";

export default function SearchBar() {
  const timeStamp = useSelector(selectCurrentTime);
  let time = new Date(timeStamp * 1000);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    dispatch({ type: "position/adressLoaded", payload: value });
    dispatch({
      type: "position/positionLoaded",
      payload: { latitude: latLng.lat, longitude: latLng.lng },
    });
    dispatch(showWeather(latLng.lat, latLng.lng));
    setAddress("");
  };

  return (
    <div className="search-bar">
      <div className="row">
        <div className="col-4">
          <h3 className="lokalno-vreme">
            Lokalno vreme{" "}
            <span>
              {time.getHours()}:
              {time.getMinutes() < 10
                ? `0${time.getMinutes()}`
                : time.getMinutes()}
            </span>
          </h3>
          <h3 className="lokalno-vreme">
            <span>
              {time.getMonth() + 1}/{time.getDate()}/{time.getFullYear()}
            </span>
          </h3>
        </div>
        <div className="col-4 form">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Unesite željenu adresu",
                    autoFocus: true,
                  })}
                  style={{
                    height: "40px",
                    marginTop: "10px",
                    padding: "10px",
                    border: "2px solid black",
                    borderRadius: "4px",
                  }}
                />

                <div>
                  {loading ? <div>...loading</div> : null}

                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: "black",
                    };

                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
      </div>
    </div>
  );
}
