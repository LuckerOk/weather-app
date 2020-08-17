import {
  WeatherState,
  FETCH_WEATHER_DATA_BY_COORDINATES_PENDING,
  FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED,
  FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED,
  FETCH_WEATHER_DATA_BY_CITY_PENDING,
  FETCH_WEATHER_DATA_BY_CITY_FULFILLED,
  FETCH_WEATHER_DATA_BY_CITY_REJECTED,
  WeatherActionTypes,
} from "../actions/actionTypes";

export const initialState: WeatherState = {
  byCoordinates: null,
  byCity: null,
  loading: false,
  error: null,
};

const weather = (state = initialState, action: WeatherActionTypes): WeatherState => {
  switch(action.type) {
    case FETCH_WEATHER_DATA_BY_COORDINATES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED:
      return {
        ...state,
        byCoordinates: action.payload,
        loading: false,
      };
    case FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED:
      return {
        ...state,
        byCoordinates: null,
        error: action.payload,
        loading: false,
      };
    case FETCH_WEATHER_DATA_BY_CITY_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WEATHER_DATA_BY_CITY_FULFILLED:
      return {
        ...state,
        byCity: action.payload,
        loading: false,
      };
    case FETCH_WEATHER_DATA_BY_CITY_REJECTED:
      return {
        ...state,
        byCity: null,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default weather;
