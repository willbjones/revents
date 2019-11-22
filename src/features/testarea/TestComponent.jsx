import React, { Component } from "react";
import { connect } from "react-redux";
import {incrementCounter, decrementCounter} from './testActions'
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import GoogleMap from "./GoogleMap";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  
  state = ({
    center: {
      lat: 51.5074,
      lng: 0.1278
    }
  })
  
  handleAddressSelect = (newLocation) => {
    console.log('newLocation', newLocation);
    this.setState({
      center: {
        lat: newLocation.lat,
        lng: newLocation.lng
      }
    })
  }

  render() {
    const {data, incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>Test</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='Decrement' />
        <br />
        <br />
        <TestPlaceInput onAddressSelect={this.handleAddressSelect} />
        <br />
        <br />
        <GoogleMap center={this.state.center} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
