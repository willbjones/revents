import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

const Marker = () => <Icon name='marker' size='big' color='red' />;

const EventDetailedMap = ({lat, lng}) => {
  const zoom = 14;
  return (
    <Segment attached='bottom'>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLK eys={{ key: 'AIzaSyBAyoG5cmLSJC1cDUgIIhtLwEF-UsutvE4' }}
          defaultCenter={{lat, lng}}
          defaultZoom={zoom} >
          <Marker
            lat={lat}
            lng={lng}
            text="My Marker" />
        </GoogleMapReact>
      </div>
    </Segment>
  )
}

export default EventDetailedMap;