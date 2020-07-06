import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// importing css
import '../assets/stylesheets/application.scss';

import AutosIndex from './containers/autos_index';
import carsReducer from './reducers/cars_reducer';

// importing form
//import { reducer as formReducer } from 'redux-form';

//const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageName = 'GarageGustin';

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

const store = createStore(reducers, initialState, middlewares);


const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={AutosIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
