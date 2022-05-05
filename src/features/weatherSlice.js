const initialState = {
  status: "idle",
  weatherData: {
    timezone: "Europe/Belgrade",
    currently: { icon: "", time: 0 },
    hourly: {
      summary: "",
      icon: "",
      data: Array(48).fill({ time: 0 }),
    },
    daily: {
      summary: "",
      icon: "",
      data: Array(10).fill({
        summary: "",
        time: 0,
        sunriseTime: 0,
        sunsetTime: 0,
      }),
    },
  },
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "weather/weatherLoaded": {
      return {
        ...state,
        status: "idle",
        weatherData: action.payload,
      };
    }
    case "weather/weatherLoading": {
      return {
        ...state,
        status: "loading",
      };
    }

    default: {
      return state;
    }
  }
}

export const weatherLoading = () => ({ type: "weather/weatherLoading" });
export const weatherLoaded = (data) => ({
  type: "weather/weatherLoaded",
  payload: data,
});

export function showWeather(latitude, longitude) {
  return async function showWeatherThunk(dispatch, getState) {
    dispatch(weatherLoading());
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_}/${latitude},${longitude}?lang=sr&units=si`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(weatherLoaded(data));
      });
  };
}

export function showWeatherByInputDate(latitude, longitude, time) {
  return async function showWeatherInputDateThunk(dispatch, getState) {
    dispatch(weatherLoading());
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_API_}/${latitude},${longitude},${time}?lang=sr&units=si`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(weatherLoaded(data));
      });
  };
}

export const selectTimeMachine = (state) => state.weather.time;
export const selectPoSatima = (state) => state.weather.weatherData.hourly;
export const selectNizPoSatima = (state) =>
  state.weather.weatherData.hourly.data;

export const selectTemperatura = (state) =>
  state.weather.weatherData.currently.temperature;
export const selectCurrentTime = (state) =>
  state.weather.weatherData.currently.time;
export const selectCurrentTimeByHours = (state) =>
  state.weather.weatherData.hourly.data[0].time;
export const selectVerovatnocaPadavina = (state) =>
  state.weather.weatherData.currently.precipProbability;
export const selectDnevnaTemperatura = (state) =>
  state.weather.weatherData.daily;
export const selectIcon = (state) => state.weather.weatherData.currently.icon;
export const selectDailyIcon = (state) =>
  state.weather.weatherData.daily.data[0].icon;
export const selectOblacnost = (state) =>
  state.weather.weatherData.currently.cloudCover;
export const selectPoDanima = (state) => state.weather.weatherData.daily;
export const selectNizPoDanima = (state) =>
  state.weather.weatherData.daily.data;
export const selectWeatherStatus = (state) => state.weather.status;
export const selectSunrise = (state) =>
  state.weather.weatherData.daily.data[0].sunriseTime;
export const selectSunset = (state) =>
  state.weather.weatherData.daily.data[0].sunsetTime;
export const selectTimezone = (state) => state.weather.weatherData.timezone;
