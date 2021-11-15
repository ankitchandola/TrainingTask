import React from "react";
import "./App.css";

function App() {
  let datafile = [
    { id: "1", home: "ghar", age: "69" },
    { id: "2", home: "dusra ghar", age: "70" },
    { id: "3", home: "tesra ghar", age: "71" },
    { id: "4", home: "chautha ghar", age: "72" },
    { id: "5", home: "pachwa ghar", age: "73" },
    { id: "6", home: "chatwa ghar", age: "74" },
  ];

  return (
    <div className="App">
      {datafile.map((datainfo) => {
        return <h1>{datainfo.id}</h1>;
      })}
    </div>
  );
}

export default App;
