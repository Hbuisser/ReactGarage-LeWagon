import React, { Component } from 'react';
import Car from '../components/car';
import cars from '../cars';
import { fetchCars } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return cars.map((car) => {
      //return <Car car={car} key={car.id}/>
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="post-item">
            <h3>{car.brand}</h3>
          </div>
        </Link>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Cars</h3>
          <Link className="btn btn-primary btn-cta" to="/cars/new">
            Create a new car
          </Link>
        </div>
        {this.renderCars()}
      </div>
    )
  }
}

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
