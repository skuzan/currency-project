# 💱 Currency Converter (React)

This project is a simple **Currency Converter App** built with **React** and **FreeCurrencyAPI**.  
The user can enter an amount and convert it between USD, EUR, and TRY in real-time.

---

## 🚀 Features

- Input field for the amount to convert  
- Currency selection (`fromCurrency` → `toCurrency`)
  - USD
  - EUR
  - TRY
- Real-time exchange rate fetching using **Axios**
- Conversion result rounded to **2 decimals**
- Clean and responsive UI:
  - Centered card layout
  - Background image (`currency.png`)
  - Arrow icon via React Icons

---

## 🛠 Technologies Used

- **React**
- **React Hooks** (`useState`)
- **Axios** (for API requests)
- **FreeCurrencyAPI**
- **React Icons**
- **CSS** (custom styling)

---

## 📦 API Information

This app uses:

**FreeCurrencyAPI (Latest Rates Endpoint)**  
https://api.freecurrencyapi.com/v1/latest

Parameters used:
- `apikey`
- `base_currency`

Example request:
https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY&base_currency=USD

src/
├── components/
│    └── Currency.jsx
├── CSS/
│    └── Currency.css
├── App.jsx
├── App.css
└── index.js
