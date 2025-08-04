
import './App.css';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     <div className="container">
      <div className="total_amount"></div>
      <h2>{count}</h2>
     < button onClick={() => setCount(0)}>🔄</button>

    <div className="card_text">
      <h3>Total amount</h3>
    </div>
     <form>
      <div className="button_collection">
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={()=>setCount(count+1)}>+</Button>
          <Button variant="contained" onClick={()=>setCount(count-1)}>-</ Button>
        </Stack>
        
      </div>
     </form>

     </div>
    </div>
  );
}

export default App;
