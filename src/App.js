import { DayStats } from "./components/dayStats";
import { DayTemp } from "./components/dayTemp";
import { FiveDays } from "./components/fiveDays";
import { Header } from "./components/header";


function App() {
  return (
    <div className="App">
        <Header />
        <DayTemp />
        <DayStats />
        <FiveDays />
    </div>
  );
}

export default App;
