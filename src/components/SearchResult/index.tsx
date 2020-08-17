import React from 'react';
import { Grid, List, Label, Icon, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { kelvinToCelsius } from '../../utils';
import {
  LeftTitleContainer,
  CurrentDayContainer,
  LeftContainer,
} from './styles';
import { SearchResultProps } from './interfaces';

const SearchResult = ({ weather, isBack = false }: SearchResultProps) => {
  const history = useHistory();

  const firstLetterCapital = (word: string): string => word.charAt(0).toUpperCase() + word.slice(1);

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <>
      <Grid>
        <Grid.Column floated="left">
          {isBack ? (
            <Button
              style={{ backgroundColor: 'white', fontSize: 25 }}
              onClick={handleBackClick}
              icon
              labelPosition="left"
            >
              {weather.name}
              <Icon name="arrow left" style={{ backgroundColor: 'white' }} />
            </Button>
          ) : (
            <Label style={{fontSize: 30, fontWeight: 'light', backgroundColor: 'white'}}>{weather.name}</Label>
          )}
        </Grid.Column>
      </Grid>
      <LeftTitleContainer>
        <Label
          style={{fontSize: 30, fontWeight: 'light', backgroundColor: 'white'}}>{moment(weather.dt * 1000).format('dddd, MMMM Do YYYY')}</Label>
         <br/>
        <Label style={{fontSize: 25, backgroundColor: 'white'}}>
          {firstLetterCapital(weather.weather[0].description)}
        </Label>
      </LeftTitleContainer>
      <CurrentDayContainer>
        <LeftContainer>
          <Grid columns="equal">
            <Grid.Column width={10} only="computer">
              <List style={{paddingTop: 80, color: '#dd8270', fontSize: 90}}>
                <List.Content>{`${kelvinToCelsius(weather.main.temp)} °C`}</List.Content>
              </List>
            </Grid.Column>
            <Grid.Column only="computer" style={{backgroundColor: 'white'}}>
              <List verticalAlign="middle" style={{paddingTop: 50, color: '#dd8270'}}>
                <List.Item>
                  <List.Content
                    floated="right">{`${kelvinToCelsius(weather.main.feels_like)} °C`}</List.Content>
                  <List.Content floated="left">Feels like</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated="right">{`${weather.main.humidity}%`}</List.Content>
                  <List.Content floated="left">Humidity</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated="right">{`${weather.wind.speed} м/с`}</List.Content>
                  <List.Content floated="left">Wind speed</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated="right">{`${weather.clouds.all}%`}</List.Content>
                  <List.Content floated="left">Cloudiness</List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </LeftContainer>
      </CurrentDayContainer>
    </>
  );
};

export default SearchResult;
