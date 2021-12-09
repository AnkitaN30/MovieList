import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList, getOrderBy, setModalData, setModalState } from "../reducers/movieReducer";
import { CardContent,CardMedia,Card, Grid} from "@mui/material";

function MovieList() {
    const dispatch = useDispatch();
    const movieList = useSelector(getMovieList);   
    const orderBy = useSelector(getOrderBy); 

    const handleOpen=(item)=>{
        dispatch(setModalData(item));
        dispatch(setModalState(true));
    }
    return (
        <Grid container spacing={2}>
            {
                !!movieList && movieList.sort((a, b)=> a[orderBy] - b[orderBy]).map((item,index) => 
                <Grid item md={4} key={index}>               
                    <Card sx={{ minHeight:300 }} onClick={()=>handleOpen(item)}>
                        <CardMedia
                            component="img"
                            height="280"
                            image={item.imageUrl}
                            alt={item.title}
                            />

                        <CardContent>
                            <Box >
                                {item.title}
                            </Box>
                        </CardContent>
                    </Card>
                   
                </Grid>
                )
            }
        </Grid>
    )
}

export default MovieList;