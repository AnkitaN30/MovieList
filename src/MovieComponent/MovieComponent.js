import './MovieComponent.scss'
import axios from 'axios';
import {connect} from 'react-redux';
import React, { useEffect,useState } from 'react';

function MovieComponent(props) {
    const [order, seOrder] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [mid, setMid] = useState(null);


    useEffect(()=>{
        axios('./Data.json').then(res=>{
            if(res){
                const movieLists = res && res.data && res.data.components && res.data.components[1].items;
                props.initalMovie(movieLists);
                  }
        }).catch(err=>console.log(err));
    })

    // setting state for order by
    const handleOrderBy = (order => {
        seOrder(order)
    })

    const showHideDetails = (e=>{
          const val = props.movieList.find(ele=>{
            return ele.id === e
          });

        if(val){
            setShowDetails(!showDetails);
            setMid(val);
        }
    })

    const hideDetails = (()=>{
        setShowDetails(!showDetails);
        setMid(null);
    })


      let displayMovieList= props.movieList; 

      if(order === "rank"){
        displayMovieList.sort((firstItem,secondItem)=>{
            return firstItem.rank-secondItem.rank
        });
      }
      if(order === "date"){
        displayMovieList.sort((firstItem,secondItem)=>{
            return firstItem.releaseDate-secondItem.releaseDate
        });       
      }
    return (
        <div className="movie-main-wrapper">
            <div className="navbar-header">
                <span>Favourite Movie</span>
            </div>

            <div className="movie-table-component">
                <div className="movie-table-header-row">
                    <span>Order By:</span>
                    <button className={order === "date" ?"order-movie active":"order-movie"} onClick={() => { handleOrderBy("date") }}>By Date</button>
                    <button className={order === "rank" ?"order-movie active":"order-movie"} onClick={() => { handleOrderBy("rank") }}>By Rank</button>
                   {
                       showDetails && mid &&
                    (<button onClick={() => { hideDetails() }}> Back </button>)
                     }
                </div>
                <div className="movie-table-list">
                    {
                        !mid ?
                            (displayMovieList && displayMovieList.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <div className="movie-table-list-row" key={index} id={item.id}>
                                            <div className="movie-name-column" key={index} onClick={(e) => { showHideDetails(item.id, e) }}>
                                                <span key={index}>{item.title}</span>
                                            </div>

                                        </div>

                                    </React.Fragment>
                                )
                            }
                            )) :
                            (
                                showDetails && mid && (
                                    <div className="movie-table-list-row movie-details" key={mid.id} onClick={() => { hideDetails() }}>
                                        <div className="movie-details-synopsis">
                                            <span>Title:</span>{mid.title}
                                        </div>                                       
                                       <div className="movie-details-synopsis">
                                            <span>Synopsis:</span>{mid.synopsis}
                                        </div>
                                        <div className="movie-details-synopsis" style={{width:"100%"}}>
                                            <span>Rank:</span>{mid.rank}
                                        </div>
                                        <div className="movie-details-date">
                                            <span>Realease Date:</span>{mid.releaseDate}
                                        </div>
                                    </div>
                                )
                            )
                    }

                </div>
            </div>
        </div>
    );
  }

const mapStateToProps = (state)=>{
    return{
        movieList:state.movieList
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        initalMovie : (data) =>{
            dispatch({
                type:"STORE_MOVIE_DETAILS",
                payload:data 
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieComponent)