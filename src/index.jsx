import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

// importing css
import '../assets/stylesheets/application.scss';

import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import CarShow from './containers/car_show';
import carsReducer from './reducers/cars_reducer.js';


// importing form

const middlewares = applyMiddleware(reduxPromise, logger);
//const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const garageName = 'GarageGustin';

const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const store = createStore(reducers, initialState, middlewares);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" component={CarShow} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
