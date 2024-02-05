import { useState } from "react";
import { SearchBar } from "./screens/SearchBar";
import { ProductTable } from "./screens/ProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];



function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = PRODUCTS.filter(product => {
    if (showStockedOnly &&!product.stocked) {
      return false;
    }
    if (searchText &&!product.name.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;  
  })

    return (
      <>
        <SearchBar 
          searchText={searchText}
          onSearchTextChange={setSearchText}
          showStockedOnly={showStockedOnly} 
          onStockedOnlyChange={setShowStockedOnly} />   
        <ProductTable products={filteredProducts}/>
        
      </>
    )
}

export default App







