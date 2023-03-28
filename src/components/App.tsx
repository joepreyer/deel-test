import '../styles/App.css'
import Autocomplete from "./auto-complete";
import { fetchCities } from '../api/fetchCities';

function App() {

  return (
    <div className="app-container">
      <h1 className="heading">Search for any city in the world:</h1>
      <p className="subtitle">(You can use your mouse or keyboard to select)</p>
      <Autocomplete fetchCities={fetchCities} />
    </div>
  );
}

export default App;
