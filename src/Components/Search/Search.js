import React, { Component } from 'react';
import "./Search.css"
import { searchMap, showMap, getCoordinates } from './../../Redux/Search';
import { connect } from 'react-redux';
import axios from 'axios';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            text: null
        }
    }
    onHandleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    searchLatLon = (cityName) => {
        let url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input={CITY_NAME}&inputtype=textquery&fields=geometry&key=AIzaSyBhp_hQ4TpNbM6mKwGfzVQ8su122_dZh-0';
        let customUrl = url.replace('{CITY_NAME}', cityName); // it is replacing the cityname in the url
        axios.get(customUrl)
            .then((response) => {
               // console.log('responseData:', response.data.candidates[0].geometry.location);
                this.props.dispatch(getCoordinates(response.data.candidates[0].geometry.location))
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }
    handleSearch = () => {
        this.props.dispatch(searchMap(this.state.text))
        this.props.dispatch(showMap(false))
        this.searchLatLon(this.state.text)
    }
    render() {
        //    console.log(this.state.text)
        return (
            <div>
                <div>
                    <input type='text' placeholder="Search..." onChange={(e) => { this.onHandleChange(e) }} />
                    <span className="glyphicon glyphicon-search searchicon" onClick={() => { this.handleSearch() }}>
                    </span>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps)(Search)
