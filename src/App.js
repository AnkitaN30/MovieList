import Movie from '../src/component/movie/movie';
import DescriptionModal from "../src/component/descriptionModal/descriptionModal"; 

function App() {
  return (
    <div className="App" key="app">
          <Movie/>
          <DescriptionModal/>
      </div>
  );
}

export default App;