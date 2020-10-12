import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// importação da instalação NPM GOOGLE
// repositório https://github.com/google-map-react/google-map-react

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

/* import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { colorRed } from '../../utils/colors';
import { Container, Location, AddressMenu } from './styles';

export default function Address() {
  return (
    <Container>
      <AddressMenu>
        <Location>
          <img src="map" alt="map" />
        </Location>
        <MaterialIcons name="keyboard-arrow-down" size={20} color={colorRed} />
      </AddressMenu>
    </Container>
  );
} */