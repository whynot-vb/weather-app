export default function getIconByName(name, width, height) {
  switch (name) {
    case "clear-day": {
      return (
        <img
          src="images/sunny.png"
          alt="clear-day"
          width={width}
          height={height}
        />
      );
    }
    case "clear-night": {
      return (
        <img
          src="images/clear-night.png"
          alt="clear-night"
          width={width}
          height={height}
        />
      );
    }
    case "rain": {
      return (
        <img src="images/rain.png" alt="rain" width={width} height={height} />
      );
    }
    case "snow": {
      return (
        <img src="images/snow.png" alt="snow" width={width} height={height} />
      );
    }
    case "sleet": {
      return (
        <img src="images/sleet.png" alt="sleet" width={width} height={height} />
      );
    }
    case "wind": {
      return (
        <img src="images/wind.png" alt="wind" width={width} height={height} />
      );
    }
    case "fog": {
      return (
        <img src="images/fog.png" alt="fog" width={width} height={height} />
      );
    }
    case "cloudy": {
      return (
        <img
          src="images/cloudy.png"
          alt="cloudy"
          width={width}
          height={height}
        />
      );
    }
    case "partly-cloudy-day": {
      return (
        <img
          src="images/partly-cloudy-day.png"
          alt="partly-cloudy-day"
          width={width}
          height={height}
        />
      );
    }
    case "partly-cloudy-night": {
      return (
        <img
          src="images/partly-cloudy-night.png"
          alt="partly-cloudy-night"
          width={width}
          height={height}
        />
      );
    }
    case "hail": {
      return (
        <img src="images/hail.png" alt="hail" width={width} height={height} />
      );
    }
    case "thunderstorm": {
      return (
        <img
          src="images/thunderstorm.png"
          alt="thunderstorm"
          width={width}
          height={height}
        />
      );
    }
    case "tornado": {
      return (
        <img
          src="images/tornado.png"
          alt="tornado"
          width={width}
          height={height}
        />
      );
    }
    default: {
      return (
        <img
          src="images/weather-forecast.png"
          alt="weather-forecast"
          width={width}
          height={height}
        />
      );
    }
  }
}

export const getAppBackgroundByIconName = (name) => {
  switch (name) {
    case "clear-day": {
      return "background-images/clear-day.jpg";
    }
    case "clear-night": {
      return "background-images/clear-night.jpg";
    }
    case "rain": {
      return "background-images/rain.jpg";
    }
    case "snow": {
      return "background-images/snow.jpg";
    }
    case "wind": {
      return "background-images/wind.jpg";
    }
    case "fog": {
      return "background-images/fog.jpg";
    }
    case "cloudy": {
      return "background-images/cloudy.jpg";
    }
    case "partly-cloudy-day": {
      return "background-images/partly-cloudy-day.jpg";
    }
    case "partly-cloudy-night": {
      return "background-images/partly-cloudy-night.jpg";
    }
    case "hail": {
      return "background-images/hail.jpg";
    }
    case "thunderstorm": {
      return "background-images/thunderstorm.jpg";
    }
    case "tornado": {
      return "background-images/tornado.jpg";
    }
    default: {
      return "background-images/tornado.jpg";
    }
  }
};

export const getBackgroundByIconName = (name) => {
  switch (name) {
    case "clear-day": {
      return {
        backgroundImage: "linear-gradient(to top right, #EAE973, #E81EAD)",
      };
    }
    case "clear-night": {
      return {
        backgroundImage: "linear-gradient(to top right, #b3e6ff, #b3b3ff)",
      };
    }
    case "rain": {
      return {
        backgroundImage: "linear-gradient(to top right, #66c2ff, #99b3ff)",
      };
    }
    case "snow": {
      return {
        backgroundImage: "linear-gradient(to top right, #ccffe6, #99ff99)",
      };
    }
    case "wind": {
      return {
        backgroundImage: "linear-gradient(to top right, #ffb3ff, #ff4dff)",
      };
    }
    case "fog": {
      return {
        backgroundImage: "linear-gradient(to top right, #d98cb3, #e600e6)",
      };
    }
    case "cloudy": {
      return {
        backgroundImage: "linear-gradient(to top right, #6666ff, #8080ff)",
      };
    }
    case "partly-cloudy-day": {
      return {
        backgroundImage: "linear-gradient(to top right, #8080ff, #bf80ff)",
      };
    }
    case "partly-cloudy-night": {
      return {
        backgroundImage: "linear-gradient(to top right, #0000cc, #5900b3)",
      };
    }
    case "hail": {
      return {
        backgroundImage: "linear-gradient(to top right, #0088cc, #2952a3)",
      };
    }
    case "thunderstorm": {
      return {
        backgroundImage: "linear-gradient(to top right, #cc5200, #b30059)",
      };
    }
    case "tornado": {
      return {
        backgroundImage: "linear-gradient(to top right, #b38600, #cc3300)",
      };
    }

    default: {
      return {};
    }
  }
};
