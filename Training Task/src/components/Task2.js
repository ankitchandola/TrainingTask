import axios from 'axios';
import React, { useEffect, useState} from 'react';


const baseURL = "http://localhost:3500/posts"

const Task2 = () => {
    const [post, setPost] = useState([])


   useEffect(() => {
     axios.get(baseURL).then((response) => {
         setPost(response.data);
     })
       
   }, [])
   const handleChange = event => {
    setPost({ title: event.target.value });
 

   }

   
    

    return (
        <div>
            
            <div>{post.map((item) => (
           <label>
            <button>
              {item.author}
            </button>
            Title:
              <input type ="text" name ="Title" onChange= {handleChange} />





           </label>
          ))}</div>
           
            <div>{post}</div>

        </div>
    )
}

export default Task2
