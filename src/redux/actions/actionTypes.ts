export interface WeatherByCoordinates {
  lat: number;
  lon: number;
}

export interface WeatherByCity {
  city: string;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherState {
  byCoordinates: WeatherData | null;
  byCity: WeatherData | null;
  loading: boolean;
  error: object | null,
}

export const FETCH_WEATHER_DATA_BY_COORDINATES_PENDING = 'FETCH_WEATHER_DATA_BY_COORDINATES_PENDING';
export const FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED = 'FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED';
export const FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED = 'FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED';
export const FETCH_WEATHER_DATA_BY_CITY_PENDING = 'FETCH_WEATHER_DATA_BY_CITY_PENDING';
export const FETCH_WEATHER_DATA_BY_CITY_FULFILLED = 'FETCH_WEATHER_DATA_BY_CITY_FULFILLED';
export const FETCH_WEATHER_DATA_BY_CITY_REJECTED = 'FETCH_WEATHER_DATA_BY_CITY_REJECTED';

interface GetWeatherAction {
  type: typeof FETCH_WEATHER_DATA_BY_COORDINATES_PENDING | typeof FETCH_WEATHER_DATA_BY_CITY_PENDING;
}

interface GetWeatherActionFulfilled {
  type: typeof FETCH_WEATHER_DATA_BY_COORDINATES_FULFILLED | typeof FETCH_WEATHER_DATA_BY_CITY_FULFILLED;
  payload: WeatherData;
}

interface GetWeatherActionRejected {
  type: typeof FETCH_WEATHER_DATA_BY_COORDINATES_REJECTED | typeof FETCH_WEATHER_DATA_BY_CITY_REJECTED;
  payload: object;
}

export type WeatherActionTypes = GetWeatherAction | GetWeatherActionFulfilled | GetWeatherActionRejected;
