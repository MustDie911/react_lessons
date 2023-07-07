import './App.css';

import Flights from "./components/flights/Flights";

function App() {
  return (
      <div>
          <Flights/>
      </div>
  );

}

// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
export default App;
