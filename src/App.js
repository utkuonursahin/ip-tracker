import "./styles/main.scss";
import {useState} from 'react';
import {IPDataProvider} from "./context/IPDataContext/IPDataContext";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Error from "./components/Error/Error";

function App() {
  const [error,setError] = useState(null);
  return (
    <div className="app">
      <IPDataProvider setError={setError}>
        <Header setError={setError}/>
        <main>
          <Map/>
        </main>
      </IPDataProvider>
      {error && <Error error={error} setError={setError}/>}
    </div>
  );
}

export default App;
