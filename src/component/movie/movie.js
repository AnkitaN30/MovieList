import React  from "react";
import { Grid } from '@mui/material';
import { Box } from "@mui/system";
import ButtonComponent from "../orderByButton/orderByButton";
import { useDispatch,useSelector } from "react-redux";
import { getError } from "../../reducers/movieReducer";
import { loadMovieDetails } from "../../actions/movieActions";
import MovieList from "../movieList/movieList";

function MovieComponent() {
    const dispatch = useDispatch();
    const error = useSelector(getError);
    dispatch(loadMovieDetails());
    
    return (
        <Grid container spacing={2} >
            <Grid item md={3} sm={3} xs={3} />

            <Grid item md={6} sm={6} xs={3}>
                {error ?
                    <Box> {error} </Box>
                    :
                    <>
                        <Box sx={{ m: 1, fontSize: '30px', textAlign: 'center' }}> 
                             Movies List
                        </Box>
                        <ButtonComponent/>
                        <MovieList />
                    </>
                }
                    

            </Grid>

            <Grid item md={3} sm={3} xs={3} />
        </Grid>
    )
}

export default MovieComponent;