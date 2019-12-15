import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


/**
 * 
 * map component to display map on results page - hasn't been set up yet and would need google keys
 */
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {


  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ width: '600px', height: '650px', background: 'grey' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;