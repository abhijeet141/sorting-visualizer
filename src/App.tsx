import { useState } from "react";
import "./App.css";
import SortingVisiulizer from "./Components/SortingVisiulizer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SortingVisiulizer />
    </div>
  );
}

export default App;
