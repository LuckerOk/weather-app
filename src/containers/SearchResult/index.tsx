import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  SearchContainer,
  FullWidthContainer,
} from '../styles';
import SearchResultComponent from '../../components/SearchResult';
import { fetchWeatherDataByCity } from '../../redux/actions/weather';
import { AppState } from '../../redux';

const SearchResult = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { weather } = useSelector((state: AppState) => ({
    weather: state.weather.byCity,
  }));

  useEffect(() => {
    const params = new URLSearchParams(history.location.search);
    const city = params.get('city');

    if (city) {
      dispatch(fetchWeatherDataByCity({ city }));
    }
  }, []);

  return (
    <Container>
      {weather ? (
        <div
          className="ui container center"
          style={{width: '70%', padding: '70px 0'}}
        >
          <SearchContainer>
            <FullWidthContainer>
              <SearchResultComponent weather={weather} isBack />
            </FullWidthContainer>
          </SearchContainer>
        </div>
      ) : null}
    </Container>
  );
};

export default SearchResult;
