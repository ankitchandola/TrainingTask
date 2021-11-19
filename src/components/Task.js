import React, { useState } from "react";
import logo from '../logo.svg';
import "./Task.css"

function Task() {
  const [data, setData] = useState([
    { id: 1, name: "Home", childrens: [] },
    { id: 2, name: "About", childrens: [] },
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
      previousData[0].childrens = [
        { id: 1, name: "Home Mousehover 1" },
        { id: 2, name: "Home Mousehover 2" },
      ];
      setData(previousData);
    }
    if (id === 2) {
      previousData[0].childrens = [];
      previousData[1].childrens = [
        { id: 1, name: "About Mousehover 1" },
        { id: 2, name: "About Mousehover 2" },
      ];
      setData(previousData);
    }
  };
  const MouseOut = () => () => {
    console.log('mouse out')
    const previousData = [...data];
    previousData[0] = [];
    previousData[1] = [];
  };
  console.log(data, "data");

  return (
    <div className = "maindiv">
                <span><img src={logo} className="App-logo" alt="logo" /> </span>
      <ul>
        {data.map((item) => (
          <>

            {/* <button classname="button" onClick={() => handleClick(item.id)}>
              {item.name}
            </button> */}
            <span className = "menu" onMouseEnter={() => MouseOver(item.id)} onMouseLeave={MouseOut()}>
              {data && <div>{item.name}</div>}
            </span>
            {item.childrens && item.childrens.length > 0 && (
              <ul>
                {item.childrens.map((innerItem) => {
                  return <li>{innerItem.name}</li>;
                })}
              </ul>
            )}
          </>
        ))}
      </ul>
      
    </div>
  );
}
export default Task;
// arrow function is myfunc = () => {}
//for stop rerendering you do myfunc = () => () =>{} or  {() => myfunc()}