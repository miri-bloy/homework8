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
    { id: 1, price: 10, code: "1A" },
    { id: 2, price: 10, code: "1B" },
    { id: 3, price: 10, code: "1C" },
    { id: 4, price: 10, code: "1D" },
    { id: 5, price: 10, code: "1E" },
    { id: 6, price: 10, code: "1F" },
    { id: 7, price: 10, code: "2A" },
    { id: 8, price: 10, code: "2B" },
    { id: 9, price: 10, code: "2C" },
    { id: 10, price: 10, code: "2D" },
    { id: 11, price: 10, code: "2E" },
    { id: 12, price: 10, code: "2F" },
    { id: 13, price: 10, code: "3A" },
    { id: 14, price: 10, code: "3B" },
    { id: 15, price: 10, code: "3C" },
    { id: 16, price: 10, code: "3D" },
    { id: 17, price: 10, code: "3E" },
    { id: 18, price: 10, code: "3F" }
  ])
  // משתנה סטייט של הקוד שהוקש
  const [currentCode, setCurrentCode] = useState('');
  // משתנה סטייט המקבל את המוצר הנוכחי
  const [currentProduct, setCurrentProduct] = useState(null);
  // משתנה סטייט שמקבל את המוצר שנבחר-לאחר הרכישה-לצורך הצגתו ללקוח
  const [productToPickup, setProductToPickup] = useState(null);
  // משתנה סטייט המקבל את הסכום שהמשתמש הכניס
  const [price, setPrice] = useState(0);
  // משתנה סטייט השומר את סכום הכסף שיש בארנק
  const [sum, setSum] = useState(50);
  // משתנה המקבל את סכום העודף המגיע ללקוח
  const [surplus, setSurplus] = useState(0);
  // הפונקציה מזומנת ע"י קומפוננטת התשלום-ובודקת האם ניתן להציג את המוצר/להחזיר עודף וכו
  const handlePurchaseAttempt = (newPrice) => {
    // בדיקה האם נבחר מוצר, והאם הסכום מספיק
    if (currentProduct != null && newPrice >= currentProduct.price) {
      // עדכון העודף המגיע ללקוח
      setSurplus(newPrice - currentProduct.price);
      // עדכון המחיר שיש ללקוח בארנק
      setSum(sum - currentProduct.price);
      // עדכון המחיר שהלקוח שילם-לאחר שקיבל את העודף
      setPrice(0);
      // עדכון המוצר שמחכה לאיסוף-במוצר הנוכחי
      setProductToPickup(currentProduct);
      // מעבר על המערך מוצרים
      setAllProducts(allProducts.map(p => p.id === currentProduct.id
        // אם האיבר הנוכחי הוא האיבר הנבחר-איפוס הערכים שיש לו במערך
        ? { id: 0, price: 0, code: "xx" }
        // אם לא-להתייחס אליו כרגיל
        : p)
      )
      // איפוס הקוד
      setCurrentCode('');
      // איפוס המוצר 
      setCurrentProduct(null);
    }
    else if (currentProduct != null && currentProduct.price - newPrice > 0) {
      alert("הסכום שהוכנס אינו מספיק");
    }
  }
  return (
    <div id='app'>
      <header>מכונת משקאות</header>
      <div id='container'>
        <aside>
          <Hello />
          <Keyboard currentCode={currentCode} setCurrentCode={setCurrentCode} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} allProducts={allProducts} />
          <Money currentProduct={currentProduct} price={price} setPrice={setPrice} handlePurchaseAttempt={handlePurchaseAttempt} />
          <Surplus surplus={surplus} />
        </aside>
        <article>
          <Products allProducts={allProducts} />
          <Selected_Product productToPickup={productToPickup} setProductToPickup={setProductToPickup} />
        </article>
      </div>
      <footer>
        <Wallet sum={sum} setSum={setSum} />
      </footer>
    </div>
  );
}

export default App;
