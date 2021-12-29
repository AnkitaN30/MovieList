import { SET_MODALDATA, SET_MODALSTATE, UPDATE_ORDERBY,STORE_MOVIE_DETAILS,ERROR} from "../reducers/movieReducer"
import { getMovieData } from "../service/getMovieData";

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
