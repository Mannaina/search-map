import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showMap} from "./../../Redux/Search";
import GoogleMap from './GoogleMap'

import './Map.css'
class Map extends Component {
    onShowMapClick=()=>{
        this.props.dispatch(showMap(true))
    }
    render() {
        return (
            <div>

                <div className="flex-box">
                    <div className="flex-1">
                        <a onClick={this.onShowMapClick}> {this.props.text}  </a>
                    </div>
                    <div className="flex-1">
                        {this.props.showMap ? <GoogleMap /> : null }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // const text = state.text;
    const { text, showMap} = state;
    return {
        text,
        showMap
    }
}
export default connect(mapStateToProps)(Map);