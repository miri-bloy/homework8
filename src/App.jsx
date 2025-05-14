import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hello from './components/Hello';
import Keyboard from './components/Keyboard';
import Wallet from './components/Wallet';
import Money from './components/Money';
import Products from './components/Products';
import Selected_Product from './components/Selected_Product';
import Surplus from './components/Surplus';

function App() {

  const [allProducts, setAllProducts] = useState([
    { name: "", price: 0, code: "1A", id: 1 },
    { name: "", price: 0, code: "2B", id: 1 },
    { name: "", price: 0, code: "3C", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },
    { name: "", price: 0, code: "000", id: 1 },

  ])

  const [currentProduct, setCurrentProduct]=useState({});
  
  return (
    <div>
      <header>מכונת משקאות</header>
      <div><Hello /></div>
      <div><Keyboard setCurrentProduct={setCurrentProduct} allProducts={allProducts}/></div>
      <div><Wallet/></div>
      <div><Money/></div>
      <div><Products/></div>
      <div><Selected_Product/></div>
      <div><Surplus/></div>
    </div>
  );
}

export default App;
