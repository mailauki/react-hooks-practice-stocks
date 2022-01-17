import React from "react";
import Stock from "./Stock";

function PortfolioContainer({boughtStocks, onStockSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStocks.map(stock => <Stock key={stock.id} stock={stock} onStockClick={onStockSell} />)}
    </div>
  );
}

export default PortfolioContainer;
