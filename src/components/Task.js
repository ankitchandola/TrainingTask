import React, { useState } from 'react';

function Task() {
      const [data, setData] = useState([
        { id: 1, name: "Home", childrens: [] },
        { id: 2, name: "About", childrens: [] }
      ]);
    
      const handleClick = (id) => {
          const previousData = [...data]
          if (id === 1) {
            previousData[1].childrens = []
            previousData[0].childrens = [
              { id: 1, name: "Home Submenu 1" },
              { id: 2, name: "Home Submenu 2" }
            ]
            setData(previousData);
          }
          if (id === 2) {
            previousData[0].childrens = []
            previousData[1].childrens = [
              { id: 1, name: "About Submenu 1" },
              { id: 2, name: "About Submenu 2" }
            ]
            setData(previousData);
          }
      };

      console.log(data, 'data')
    
      return (
        <div>
          <ul>{data.map((item) => (
            <li>
              <button  onClick={() => handleClick(item.id)}>
                {item.name}
              </button>
              {
                item.childrens && item.childrens.length > 0 && 
                <ul>
                  {
                    item.childrens.map((innerItem) => {
                      return (
                       <li>{innerItem.name}</li> 
                      )    
                    })
                  }
                </ul>
              }
            </li>
          ))}
          </ul>
        </div>
      );
}
export default Task;