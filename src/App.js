import "./styles/main.scss";
import {MainProvider} from "./context/MainContext";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="app">
      <MainProvider>
        <Header/>
        <main>
          <Map/>
        </main>
      </MainProvider>
    </div>
  );
}

export default App;
