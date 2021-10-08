import React,{Component} from 'react';
// import MoviesTableComponent from './MoviesTableComponent/MoviesTableComponent';
// import './MoviesTableComponent/MoviesTableComponent.css';
import './MovieComponent.scss'
import axios from 'axios';
import {connect} from 'react-redux';

class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData:[],
            orderMovieByDate:[],
            orderMovieByRank:[],
            movieList:[],
            order:'',
            showDetails:false,
            mid:null

        };
        this.handleOrderBy = this.handleOrderBy.bind(this);
        this.showHideDetails = this.showHideDetails.bind(this);
        // this.movieItemRef = React.createRef();

    }

    componentDidMount(){
        axios('./Data.json').
        then(res=>{
            if(res){
                const movieList = res && res.data && res.data.components && res.data.components[1].items;
                this.props.initalMovie(movieList);
                
                this.setState({
                    movieData:res && res.data && res.data.components && res.data.components,
                    movieList:res && res.data && res.data.components && res.data.components[1].items,
                })
            }
        }).
        catch(err=>console.log(err));
    }

    // setting state for order by
    handleOrderBy(order){
       this.setState({
        order
       })
    }

    showHideDetails(e){
        console.log("target",e)
          const val = this.props.movieList.find(ele=>{
            return ele.id === e
          });

        if(val){
            this.setState({
                showDetails:!this.state.showDetails,
                mid:val
            })
        }
    }

    hideDetails(){
        this.setState(
            { 
                showDetails:!this.state.showDetails,
                mid:null
             }
            )
    }


  render(){
      const{movieList}=this.props;
      const{order,showDetails,mid}=this.state;
      let displayMovieList= movieList; 

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
                    Order By:
                    <button onClick={() => { this.handleOrderBy("date") }}>By Date</button>
                    <button onClick={() => { this.handleOrderBy("rank") }}>By Rank</button>
                </div>
                <div className="movie-table-list">
                    {
                        !mid ?
                            (displayMovieList && displayMovieList.map((item, index) => {
                                return (
                                    <>
                                        <div className="movie-table-list-row" key={index} id={item.id}>
                                            <div className="movie-name-column" onClick={(e) => { this.showHideDetails(item.id, e) }}>
                                                <span>{item.title}</span>
                                            </div>

                                        </div>

                                    </>
                                )
                            }
                            )) :
                            (
                                showDetails && mid && (
                                    <div className="movie-table-list-row movie-details" onClick={() => { this.hideDetails() }}>
                                        <div className="movie-details-synopsis">
                                            <span>Title:</span>{mid.title}
                                        </div>
                                        {/* <img src={mid.imageUrl} alt={mid.imageUrl} height="350" width='300' /> */}
                                        <div className="movie-details-synopsis">
                                            <span>Synopsis:</span>{mid.synopsis}
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