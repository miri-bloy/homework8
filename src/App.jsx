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
// משתנה סטייט המקבל את מערך המוצרים
  const [allProducts, setAllProducts] = useState([
    {id: 1, name: "", price: 10, code: "1A"},
    {id: 2, name: "", price: 10, code: "1B"},
    {id: 3, name: "", price: 10, code: "1C"},
    {id: 4, name: "", price: 10, code: "1D"},
    {id: 5, name: "", price: 10, code: "1E"},
    {id: 6, name: "", price: 10, code: "1F"},
    {id: 7, name: "", price: 10, code: "2A"},
    {id: 8, name: "", price: 10, code: "2B"},
    {id: 9, name: "", price: 10, code: "2C"},
    {id: 10, name: "", price: 10, code: "2D"},
    {id: 11, name: "", price: 10, code: "2E"},
    {id: 12, name: "", price: 10, code: "2F"},
    {id: 13, name: "", price: 10, code: "3A"},
    {id: 14, name: "", price: 10, code: "3B"},
    {id: 15, name: "", price: 10, code: "3C"},
    {id: 16, name: "", price: 10, code: "3D"},
    {id: 17, name: "", price: 10, code: "3E"},
    {id: 18, name: "", price: 10, code: "3F"}
  ])

  // משתנה סטייט המקבל את המוצר הנוכחי
  const [currentProduct, setCurrentProduct]=useState({});
  
  // משתנה סטייט המקבל את הסכום שהמשתמש הכניס
  const [price, setPrice]=useState(0);

  return (
    <div>
      <header>מכונת משקאות</header>
      <div><Hello /></div>
      <div><Keyboard setCurrentProduct={setCurrentProduct} allProducts={allProducts}/></div>
      <div><Wallet/></div>
      <div><Money price={price} setPrice={setPrice}/></div>
      <div><Products allProducts={allProducts}/></div>
      <div><Selected_Product/></div>
      <div><Surplus/></div>
    </div>
  );
}

export default App;
