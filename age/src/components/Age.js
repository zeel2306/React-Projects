import React, { useState } from 'react';

const Age = () => {
  const [birthdate, setbirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    console.log("Button clicked");

    if (!birthdate) {
      console.log("No birthdate selected");
      return;
    }

    const today = new Date();
    const birthdatedate = new Date(birthdate);

    let calculatedAge = today.getFullYear() - birthdatedate.getFullYear();
    const monthDiff = today.getMonth() - birthdatedate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdatedate.getDate())) {
      calculatedAge--;
    }

    console.log("Calculated age:", calculatedAge);
    setAge(calculatedAge);
  };

  const reset = () => {
    setbirthdate('');
    setAge(null);
  };

  return (
    <div className='container'>
      <h2 className='heading container_title'>Age Calculator</h2>
      <p className='para container_title'>The Age calculator can determine the age or interval</p>

      <div className="container_middle">
        <div className="right">
          <h4>Date of Birth</h4>
          <input
            className='date'
            type="date"
            value={birthdate}
            onChange={e => setbirthdate(e.target.value)}
          />
          <div className="button_div">
            <button className="button-65" onClick={calculateAge}>Calculate Age</button>
            <button className="button-65" onClick={reset}>Reset</button>
          </div>
        </div>

        <div className='left'>
          {age !== null && (
            <>
              <div className="container_middle_para">
                <h1>Your Age is</h1>
              </div>
              <div className="container_middle_para">
                <h1>{age}</h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Age;
