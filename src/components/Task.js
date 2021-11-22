import React, { useState } from "react";
import logo from '../logo.svg';
import "./Task.css"

function Task() {
  const [data, setData] = useState([
    { id: 1, name: "Home", childrens: [] },
    { id: 2, name: "About", childrens: [] },
    { id: 3, name: "Tech", childrens: [] },
    { id: 4, name: "place", childrens: [] },
    
  ]);

  // const handleClick = (id) => {
  //   const previousData = [...data];
  //   if (id === 1) {
  //     previousData[1].childrens = [];
  //     previousData[0].childrens = [
  //       { id: 1, name: "Home Submenu 1" },
  //       { id: 2, name: "Home Submenu 2" },
  //     ];
  //     setData(previousData);
  //   }
  //   if (id === 2) {
  //     previousData[0].childrens = [];
  //     previousData[1].childrens = [
  //       { id: 1, name: "About Submenu 1" },
  //       { id: 2, name: "About Submenu 2" },
  //     ];
  //     setData(previousData);
  //   }
  // };

  const MouseOver = (id) => {
    console.log('mouse over', id)
    const previousData = [...data];
    if (id === 1) {
      previousData[1].childrens = [];
      previousData[2].childrens = [];
      previousData[3].childrens = [];


      previousData[0].childrens = [
        { id: 1, name: "Home Mousehover 1" },
        { id: 2, name: "Home Mousehover 2" },
      ];
      setData(previousData);
    }
    if (id === 2) {
      previousData[0].childrens = [];
      previousData[2].childrens = [];
      previousData[3].childrens = [];
      previousData[1].childrens = [
        { id: 1, name: "About Mousehover 1" },
        { id: 2, name: "About Mousehover 2" },
      ];
      setData(previousData);
    }
    if (id === 3) {
      previousData[0].childrens = [];
      previousData[1].childrens = [];
      previousData[3].childrens = [];
      previousData[2].childrens = [
        { id: 1, name: "Tech Mousehover 1" },
        { id: 2, name: "Tech Mousehover 2" },
      ];
      setData(previousData);
    }
    if (id === 4) {
      previousData[0].childrens = [];
      previousData[2].childrens = [];
      previousData[1].childrens = [];
      previousData[3].childrens = [
        { id: 1, name: "Place Mousehover 1" },
        { id: 2, name: "Place Mousehover 2" },
      ];
      setData(previousData);
    }
  };
  const MouseOut = () => () => {
    console.log('mouse out')
    const previousData = [...data];
    previousData[0].childrens = [];
    previousData[1].childrens = [];
    previousData[2].childrens = [];
    previousData[3].childrens = [];
    setData(previousData);
  };
  console.log(data, "data");

  return (
    <div className = "maindiv">
                <span><img src={logo} className="App-logo" alt="logo" /> </span>
      <div className = "menu">
        {data.map((item) => (
          <div className = "submenu">

            {/* <button classname="button" onClick={() => handleClick(item.id)}>
              {item.name}
            </button> */}
            <div onMouseEnter={() => MouseOver(item.id)} onMouseLeave={MouseOut()}>
              {data && <a href = "/" target="_blank" className="linkcss">{item.name}</a>}
              {item.childrens && item.childrens.length > 0 && (
              <div className = "subsubmenu">
                {item.childrens.map((innerItem) => {
                  return <div>{innerItem.name}</div>;
                })}
              </div>
            )}
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
}
export default Task;
// arrow function is myfunc = () => {}
//for stop rerendering you do myfunc = () => () =>{} or  {() => myfunc()}