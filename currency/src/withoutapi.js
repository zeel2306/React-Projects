import React, { useState } from 'react';  

export default function Currency() {
  
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rated,setRates] = useState({});

  // Fake conversion rates (demo purpose)
  const conversionRates = {
    USD: { USD: 1, INR: 83.12, EUR: 0.92 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011 },
    EUR: { USD: 1.09, INR: 90.5, EUR: 1 }
  };

  const convertCurrency = () => {
    const rate = conversionRates[fromCurrency][toCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className='container'>

      <div className="Amount">
        <h2>Amount :</h2>
        <input 
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="Currency">
        <h2>From currency :</h2>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD - United States Dollar</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>

      <div className="TO_Currency">
        <h2>To currency:</h2>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD - United States Dollar</option>
          <option value="INR">INR - Indian Rupee</option>
          <option value="EUR">EUR - Euro</option>
        </select>
      </div>

      <div>
        <button onClick={convertCurrency}>Convert</button>
        <h2>Converted Amount: {convertedAmount}</h2>
      </div>

    </div>
  );
}
