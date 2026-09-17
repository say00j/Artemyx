import "./App.css";
import indiaMap from "./assets/india-map.jpeg";

function App() {
  return (
    <div className="main-page">
      <h1>Artemyx</h1>

      <img
        src={indiaMap}
        alt="India Map"
        className="india-map"
      />
    </div>
  );
}

export default App;