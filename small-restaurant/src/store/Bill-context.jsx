import React,{useEffect,useState} from "react";

const BillContext=React.createContext({
    dishes:[],
    onAdditem:()=>{},
    RemoveItem:()=>{}

})
export const BillContextProvider=props=>{
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

  return <BillContext.Provider value={{onAdditem:Additems,RemoveItem:RemoveDish,dishes:dishlist}}>{props.children}</BillContext.Provider>
}


export default BillContext