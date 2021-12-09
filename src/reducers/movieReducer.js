import { getMovieData } from "../service/getMovieData";

const initState = {
    movieList: [],
    orderSelect:[],
    orderBy:null,
    errormessage:null,
    modalState:false,
    modalData:null
}

//Reducer
const movieReducer = (state = initState, action) => {
     switch (action.type) {
        case STORE_MOVIE_DETAILS: return {
            ...state,
            movieList: action.payload.components[1].items,
            orderSelect:action.payload.components[0].items,
            orderBy:action.payload.components[0].items[0].valueToOrderBy,
            errormessage:null
        }
        case UPDATE_ORDERBY: return{
            ...state,
            orderBy:action.payload            
        }
        case SET_MODALSTATE:return{
            ...state,
            modalState:action.payload
        }
        case SET_MODALDATA:return{
            ...state,
            modalData:action.payload
        }
        case ERROR: return {
            ...state,
            errormessage: action.payload
        }
        default:
            return state;
    }
}
export default movieReducer;

export const STORE_MOVIE_DETAILS = "STORE_MOVIE_DETAILS";
export const ERROR = "ERROR";
export const UPDATE_ORDERBY = "UPDATE_ORDERBY";
export const SET_MODALSTATE = "SET_MODALSTATE";
export const SET_MODALDATA = "SET_MODALDATA";

export const getOrderSelect = (state)=> state.orderSelect;
export const getOrderBy = (state)=>state.orderBy;
export const getMovieList = (state)=>state.movieList;
export const getError = (state)=>state.errormessage;
export const getModalState = (state)=>state.modalState;
export const getModalData= (state)=>state.modalData;

export const setModalState = (modalState)=>({
    type:SET_MODALSTATE,
    payload:modalState
})

export const setModalData = (modalData)=>({
    type:SET_MODALDATA,
    payload:modalData
})

export const setOrderBy = (orderBy)=>({
    type:UPDATE_ORDERBY,
    payload:orderBy
})


//Action creators
export const loadMovieDetails = () => async (dispatch, getState) => 
{
    try {
        let movieData = await getMovieData();
        dispatch({
            type: STORE_MOVIE_DETAILS,
            payload: movieData
            });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload:"Error in fetching"
        })
    }
}