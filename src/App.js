import React,{Component} from 'react';
import MovieComponent from './MovieComponent/MovieComponent';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <MovieComponent/> 
      </div>
    );
  }
}

export default App;
