import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks}) {
  const [boughtStocks, setBoughtStocks] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")

  function handleStockBuy(boughtStock) {
    setBoughtStocks([...boughtStocks, boughtStock])
  }
  
  function handleStockSell(soldStock) {
    const updatedBoughtStocks = boughtStocks.filter(stock => {
      if(stock.id !== soldStock.id) return stock
    })
    setBoughtStocks(updatedBoughtStocks)
  }

  const stocksToDisplay = stocks
  .filter(stock => {
    if(stock.type === filter) return stock
    else if(filter === "") return stock
  })
  .sort((a, b) => {
    if(sort === "Alphabetically") {
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
      return 0
    }
    if(sort === "Price") {
      return a.price - b.price
    }
  })

  return (
    <div>
      <SearchBar onSortChange={value => setSort(value)} onFilterChange={value => setFilter(value)} sort={sort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} onStockBuy={handleStockBuy} />
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} onStockSell={handleStockSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
