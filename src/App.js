import "./App.css";
import Header from "./components/header";
import Window from "./components/window";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="window_bounds">
        <Window name="Window 2" />
        <Window name="Window 1" />
      </div>
    </div>
  );
}

export default App;
