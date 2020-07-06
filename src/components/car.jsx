import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div>
        {this.props.car.brand}
      </div>
    )
  }
}



export default Car;
