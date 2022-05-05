const initialState = {
  positionCoordinates: {
    latitude: 43.72342,
    longitude: 20.686975,
    userAdress: "",
  },
};

export default function positionReducer(state = initialState, action) {
  switch (action.type) {
    case "position/positionLoaded": {
      return {
        ...state,
        positionCoordinates: {
          ...state.positionCoordinates,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    }

    case "position/adressLoaded": {
      return {
        ...state,
        positionCoordinates: {
          ...state.positionCoordinates,
          userAdress: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
}

export async function fetchStartingPosition(dispatch, getState) {
  if (navigator.geolocation) {
    await navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      dispatch({
        type: "position/positionLoaded",
        payload: { latitude, longitude },
      });
    });
  }
}

export const selectCoordinates = (state) => state.position.positionCoordinates;
export const selectAdress = (state) =>
  state.position.positionCoordinates.userAdress;
export const selectLatitude = (state) =>
  state.position.positionCoordinates.latitude;
export const selectLongitude = (state) =>
  state.position.positionCoordinates.longitude;
