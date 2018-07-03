import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;
class GoogleMap extends Component {
  static defaultProps = {
    center: { 
      lat: 28.5355, 
      lng:77.3910 
    },
    zoom: 11
  }
  
  render() {
    return (
      <div className='googlemap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBhp_hQ4TpNbM6mKwGfzVQ8su122_dZh-0' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 28.5355 }
            lng={ 77.3910 }
          />
        </GoogleMapReact>
      </div>
    )
  }
}
export default GoogleMap;
