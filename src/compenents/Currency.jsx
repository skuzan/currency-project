import React, { useState } from "react";
import "../CSS/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

const API_KEY = "fca_live_BQz84gSmhFWxF9Gicoo9ZYBbdmscB1x2JDMFbkEE";

const Currency = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency]*amount).toFixed(2);
    setResult (result);
  };

  return (
    <div className="currency-div">
      <div>
        <h3>Currency Project</h3>
      </div>
      <div>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="from-currency-option"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight
          style={{ fontSize: "24px", marginRight: "10px" }}
        />

        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          className="result"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </div>
      <div>
        <button onClick={exchange}>Çevir</button>
      </div>
    </div>
  );
};

export default Currency;
