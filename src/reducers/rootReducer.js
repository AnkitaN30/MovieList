const initState = {
    movieList:[]
}
const rootReducer = (state = initState,action)=>{
    if(action.type === "STORE_MOVIE_DETAILS") {
        return {
            ...state,
            movieList:action.payload
        }        
    }
    return state;
}

export default rootReducer;