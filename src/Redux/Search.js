import axios from 'axios';

export const searchMap =text=>{
    return {
        type: "SEARCHMAP",
        text: text
    }
}

export const showMap = value => {
    return {
        type: "SHOWMAP",
        showMap:value
    }
}

export const getCoordinates = coordinates => {
    return {
        type:"GETCOORDINATES",
        coordinates:coordinates
    }
}

export const getLocation = location => {
    return {
        type: "GETLOCATION",
        location: location
    }
}

export const searchReducer = (state = {
    showMap: true
}, action)=>{
switch(action.type){
    case "SEARCHMAP":
   // console.log(action.text)
    return Object.assign({},state,{text:action.text})  //state mutate
    case "SHOWMAP":
    return Object.assign({},state,{showMap:action.showMap})
    case "GETCOORDINATES":
    return Object.assign({}, state,{coordinates: action.coordinates})
    case "GETLOCATION":
    return Object.assign({}, state, { location: action.location })
    default:
    return state;

}
}

