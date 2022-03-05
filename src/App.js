import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currtime, setCurrtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrtime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="App">
      <h1 className="text">🔱CLOCK OF THE GOD 🔱</h1>
      <h2 className="time"> {currtime}</h2>
    </div>
  );
}

export default App;
