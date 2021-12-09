import axios from "axios";

export const getMovieData = async()=>{
    try {
       let res = await axios('./Data.json'); 
          return res.data;
         } catch (error) {        
    }
}