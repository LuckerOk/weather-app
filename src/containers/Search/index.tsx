import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react'
import { fetchWeatherDataByCoordinates } from '../../redux/actions/weather';
import {
  Container,
  SearchContainer,
  FullWidthContainer,
  InputContainer
} from '../styles';
import SearchResult from '../../components/SearchResult';
import { AppState } from '../../redux';
import { Position } from './interfaces';

const Search = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {weather, loading} = useSelector((state: AppState) => ({
    weather: state.weather.byCoordinates,
    loading: state.weather.loading,
  }));
  const [city, setCity] = useState('');

  useEffect((): void => {
    if (navigator.geolocation) {
      const success = (position: Position) => {
        localStorage.setItem('userLocation', JSON.stringify({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));

        dispatch(fetchWeatherDataByCoordinates({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));
      };

      navigator.geolocation.getCurrentPosition(success);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  }

  const handleSubmit = (): void => {
    if (city) {
      history.push({
        pathname: '/result',
        search: `?city=${city}`,
      })
    }
  };

  return (
    <Container>
      <div
        className="ui container center"
        style={{width: '70%', padding: '70px 0'}}
      >
        <SearchContainer>
          <FullWidthContainer>
            {!loading && weather ? (
              <SearchResult weather={weather} />
            ) : null}
            <InputContainer>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  className="search"
                  style={{width: '70%', minWidth: 300}}
                  action={{icon: 'search'}}
                  placeholder="Enter the city name "
                  size="big"
                  onChange={handleChange}
                />
              </Form>
            </InputContainer>
          </FullWidthContainer>
        </SearchContainer>
      </div>
    </Container>
  );
};

export default Search;
