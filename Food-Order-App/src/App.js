import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Layout/Cart/Cart";
import FoodContext from "./store/FoodContext";
import { useContext } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const ctx=useContext(FoodContext)

 
  return (<CartProvider>
    {ctx.ShowCart&&<Cart/>}
    <Header/>
    <Meals/>
  </CartProvider>
  );
}

export default App;
