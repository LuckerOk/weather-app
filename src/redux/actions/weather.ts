import axios from 'axios';
import { Dispatch } from 'redux';
import {
  WeatherByCoordinates,
  WeatherByCity,
  FETCH_WEATHER_DATA_BY_COORDINATES_PENDING,
  FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED,
  FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED,
  FETCH_WEATHER_DATA_BY_CITY_PENDING,
  FETCH_WEATHER_DATA_BY_CITY_FULFILLED,
  FETCH_WEATHER_DATA_BY_CITY_REJECTED,
} from "./actionTypes";
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_APPID } from '../../constants';

export const fetchWeatherDataByCoordinates = ({ lat, lon }: WeatherByCoordinates) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: FETCH_WEATHER_DATA_BY_COORDINATES_PENDING });

    const response = await axios.get(`${OPEN_WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}`);

    dispatch({ type: FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED, payload: error });
  }
};

export const fetchWeatherDataByCity = ({ city }: WeatherByCity) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: FETCH_WEATHER_DATA_BY_CITY_PENDING });

    const response = await axios.get(`${OPEN_WEATHER_API_URL}q=${city}&appid=${OPEN_WEATHER_APPID}`);

    dispatch({ type: FETCH_WEATHER_DATA_BY_CITY_FULFILLED, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_WEATHER_DATA_BY_CITY_REJECTED, payload: error });
  }
};
