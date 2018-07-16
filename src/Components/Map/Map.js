import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showMap } from "./../../Redux/Search";
import GoogleMap from './GoogleMap'

import './Map.css'
class Map extends Component {
    onShowMapClick = () => {
        this.props.dispatch(showMap(true))
    }
    render() {
        let resCoordinates = {};
        if (this.props.coordinates !== undefined) {
            resCoordinates = this.props.coordinates;
        }
        let places = null;
        places = this.props.location !== undefined && this.props.location.map((place) => {
            return (<li key={place.name}>{place.name}</li>);
        });
        return (
            <div>
                <div className="flex-box">
                    <div className="flex-1">
                        <a onClick={this.onShowMapClick}>
                            {this.props.text}
                            <br />
                            {resCoordinates.lat}
                            <br />
                            {resCoordinates.lng}
                        </a>
                    </div>
                    <div className="flex-1">
                        {/* this.props.showMap ? <GoogleMap /> : null */}
                        <ul>
                            {places}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // const text = state.text;
    console.log('we are geeting this state', state)
    const { text, showMap, coordinates, location } = state;
    return {
        text,
        showMap,
        coordinates,
        location
    }
}
export default connect(mapStateToProps)(Map);