import React, { Component } from 'react';
import Car from '../components/car';
import cars from '../cars';
import { fetchAutos } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AutosIndex extends Component {
  componentWillMount() {
    this.props.fetchAutos(this.props.garage);
  }

  render() {
    return (
      <div>
        {
          this.props.cars.map((car) => {
            return <Car car={car} key={car.id}/>
          })
        }
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchAutos },
    dispatch
  );
}

function mapStateToProps(state) {
  return { 
    garage: state.garage,
    cars: state.cars
  };
}

export default connect(mapStateToProps, DispatchToProps)(AutosIndex);
