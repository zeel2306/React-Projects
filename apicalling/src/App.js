
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[data,setdata]=useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json)
    
      
  }, []);
  return (
    <div className="App">
      {data ? "data" : "no daata"}


    </div>
  );
}

export default App;
