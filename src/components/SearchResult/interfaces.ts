import { WeatherData } from "../../redux/actions/actionTypes";

export interface SearchResultProps {
  weather: WeatherData;
  isBack?: boolean;
}
