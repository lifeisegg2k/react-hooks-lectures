import logo from './etc/logo.svg';
import US from "./components/UseStats";
import USA from "./components/UseStatsUgly";
import UI from "./components/UseInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" />
      </header>
      <US />
      <USA />
      <UI />
    </div>
  );
}

export default App;
