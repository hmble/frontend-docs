import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HNFetch, { DummyFetch } from "./HNFetch";
import Clock, { Clock2, HClock2 } from "./Clock";
import Welcome from "./Welcom";
import Toggle from "./Toggle";
function App() {
  useEffect(() => {
    console.log("Will run on every render");
  });
  return (
    <div className="App">
      {/* <HNFetch /> */}
      <DummyFetch />
    </div>
  );
}

export default App;
