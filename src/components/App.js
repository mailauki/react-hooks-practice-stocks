import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  // console.log(stocks)

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} />
    </div>
  );
}

export default App;
