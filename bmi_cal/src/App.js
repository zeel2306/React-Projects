
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setweight] = useState('');
  const [Height, setHeight] = useState('');
  const[bmi,setbmi]= useState('');
  const[message,setMessage]= useState('');
  let calcBmi=(e) =>{
    	e.preventDefault();
    if(weight==='' || Height==='')
    {
      alert("please enter a valid weight and height");
    } 
    else{
      let bmi= (weight/(Height*Height)*10000);
      setbmi(bmi.toFixed(1));
      if (bmi<25){
        setMessage('you are under weight');
      }
      else if(bmi>=25 && bmi<30){
        setMessage('you are overweight');
      }
      else
      setMessage('you are different');
    }
  }
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight</label>
            <input type="text"
             placeholder="Enter weight value in kg"
              value={weight} 
              onChange={(e)=> setweight(e.target.value)}
              />
          </div>
          <div>
            <label>Height</label>
            <input type="text"
             placeholder="Enter Height value in cm"
              value={Height }
              onChange={(e)=> setHeight(e.target.value)}
                 />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline"type="button" onClick={reload}>reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is :</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
