import React, { Component } from 'react';
import Car from '../components/car';
import cars from '../cars';
import { fetchCars } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div>
        {
          cars.map((car) => {
            return <Car car={car} key={car.id}/>
          })
        }
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
