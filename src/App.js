import US from "./components/UseStats";
import USA from "./components/UseStatsUgly";
import UI from "./components/UseInput";
import UT from "./components/UseTabs";

function App() {
  return (
    <div className="App">
      <div>
        <h1>useStats</h1>
        <US />
        <USA />
      </div>
      <hr />
      <div>
        <h1>useInput</h1>
        <UI />
      </div>
      <hr />
      <div>
        <h1>useTabs</h1>
        <UT />
      </div>
      <hr />
    </div>
  );
}

export default App;
