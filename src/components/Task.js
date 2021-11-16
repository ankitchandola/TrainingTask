import React, { useState } from 'react';

function Task() {
    const [data, setData] = useState([
        { id: 1, name: "home" },
        { id: 2, name: "about" }
      ]);
    
      console.log("data", data);
      const handleClick = (id) => {
        console.log(id);
        if (id === 1)
          setData((data) => [
            ...data,
            data[0].name = "Home"
          ]);
        if (id === 2)
        setData((data) => [
            ...data,
            data[1].name = "About"
          ]);
      };
    
      return (
        <div>
          <div>{data.map((item) => (
            <button  onClick={() => handleClick(item.id)}>
              {item.name}
            </button>
          ))}</div>
          <div>{console.log()}</div>
        </div>
      );
}
export default Task;