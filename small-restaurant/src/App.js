
import AddItems from "./components/AddItems"
import DishList from "./components/Display/DishList"
import BillContext from "./store/Bill-context";
import { useState, useEffect } from "react";
function App() {
  const [dishlist, setDishList] = useState([])
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const dishes = JSON.parse(localStorage.getItem(localStorage.key(i)))
      setDishList((prev) => {
        return [...prev, dishes]
      })
    }
  }, [])
  const Additems = (dish) => {
    setDishList(prev => {
      return [...prev, dish]
    })
  }

  const RemoveDish = (id) => {
    const newDishList = dishlist.filter(value => value.id !== id)
    setDishList(newDishList)
    localStorage.removeItem(id)
  }
  return (<BillContext.Provider value={{
    items: dishlist,
    RemoveItem: RemoveDish,

  }}>
     <div style={{
      height:"100px",
      backgroundColor:'rgba(173, 169, 169,0.5)'
     }}>
      <h2>Your Resto..</h2>
     </div>
    <AddItems onAdditem={Additems} />
    <DishList dishes={dishlist} />
  </BillContext.Provider>

  );
}

export default App;
