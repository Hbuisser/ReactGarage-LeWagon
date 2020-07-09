import React, { Component } from 'react';
import Car from '../components/car';
//import cars from '../cars';
import { fetchCars } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Aside from '../components/aside';


class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render () {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src="assets/images/logo_square.svg" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
};

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

function mapStateToProps(state) {
  return { 
    garage: state.garage,
    cars: state.cars
  };
}

export default connect(mapStateToProps, DispatchToProps)(CarsIndex);



