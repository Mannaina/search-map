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

export const searchReducer = (state = {
    showMap: true
}, action)=>{
switch(action.type){
    case "SEARCHMAP":
   // console.log(action.text)
    return Object.assign({},state,{text:action.text})  //state mutate
    case "SHOWMAP":
    return Object.assign({},state,{showMap:action.showMap})
    default:
    return state;

}
}

