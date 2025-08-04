import React, { useEffect, useState } from 'react'
import { data, NavLink } from 'react-router';

const Home = () => {
  const[posts,setposts] = useState([])
  useEffect (()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
       .then((data)=>data.json())
       .then((data)=>setposts(data));
      
  },[]);
  
  return (
    <div className='posts'>
    //  {
        posts.map((posts)=>
        <NavLink style={{display:"block"}} to={`/post/${posts.id}`}>{posts.title}</NavLink>
      )
      }
    </div>
  )
}

export default Home
