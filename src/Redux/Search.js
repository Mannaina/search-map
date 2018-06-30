export const searchMap =text=>{
    return {
        type: "SEARCHMAP",
        text: text
    }
}

export const searchReducer = (state ={}, action)=>{
switch(action.type){
    case "SEARCHMAP":
   // console.log(action.text)
    return Object.assign({},state,{text:action.text})
    default:
    return state;

}
}

