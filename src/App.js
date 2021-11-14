import React from "react";
import "./App.css";

function App() {
  const datafile = 0;

  return (
    <div className="App">
      {datafile.map((datainfo) => {
        return <h1>hii</h1>;
      })}
    </div>
  );
}

export default App;
