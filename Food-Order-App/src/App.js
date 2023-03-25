import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Layout/Cart/Cart";
import FoodContext from "./FoodContext";
import { useContext } from "react";
function App() {
  const ctx=useContext(FoodContext)
  return (<>
    {ctx.ShowCart&&<Cart/>}
    <Header/>
    <Meals/>
  </>
  );
}

export default App;
