import React  from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../containers/Search';
import SearchResult from '../containers/SearchResult';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route path="/result">
        <SearchResult />
      </Route>
    </Switch>
  );
}

export default Routes;
