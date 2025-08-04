import React, { useEffect, useState } from 'react';

// Map currency codes to country names
const currencyToCountry = {
  USD: "United States",
  INR: "India",
  EUR: "European Union",
  GBP: "United Kingdom",
  JPY: "Japan",
  CAD: "Canada",
  AUD: "Australia",
  CNY: "China",
  BRL: "Brazil",
  ZAR: "South Africa",
  // Add more as needed
};

export default function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [rates, setRates] = useState({});
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        const available = Object.keys(data.rates).filter(code => currencyToCountry[code]);
        setCurrencyList(available);
        setRates(data.rates);
        setFromCurrency(available[0]);
        setToCurrency(available[1]);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (fromCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => setRates(data.rates))
        .catch((err) => console.log(err));
    }
  }, [fromCurrency]);

  const convertCurrency = () => {
    if (rates[toCurrency]) {
      const rate = rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>

      <div className="Amount">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="Currency">
        <label>From Country:</label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currencyToCountry[currency]} ({currency})
            </option>
          ))}
        </select>
      </div>

      <div className="TO_Currency">
        <label>To Country:</label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currencyToCountry[currency]} ({currency})
            </option>
          ))}
        </select>
      </div>

      <button onClick={convertCurrency}>Convert</button>

      <h3>
        Converted Amount: {convertedAmount > 0 ? `${convertedAmount} ${toCurrency}` : '—'}
      </h3>
    </div>
  );
}
