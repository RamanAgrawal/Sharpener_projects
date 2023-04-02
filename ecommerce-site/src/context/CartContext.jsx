import React, { useContext } from 'react'
import { useReducer } from 'react';


const defaultState = {
    items: [],
    totalAmount:0,
}
let cartQuantity=0
const Cart = React.createContext();
const reducer = (state, action) => {
  if(action.type==='ADD'){
    cartQuantity++
    const existingItemIndex=state.items.findIndex(item=>item.id===action.item.id)
    const existingCartItem=state.items[existingItemIndex]
    console.log(existingCartItem);
    let updatedItems
    if(existingCartItem){
          const updatedItem={...existingCartItem,quantity:existingCartItem.quantity+1}
          updatedItems=[...state.items];
          updatedItems[existingItemIndex]=updatedItem
    }
    else{updatedItems=state.items.concat(action.item)}
    const updatedTotalAmount=state.totalAmount+action.item.price
    return {items:updatedItems,totalAmount:updatedTotalAmount}
  }
  if(action.type==='REMOVE'){
    cartQuantity--;
    const existingItemIndex=state.items.findIndex(item=>item.id===action.item.id)
    const existingCartItem=state.items[existingItemIndex]
    let updatedTotalAmount=state.totalAmount-action.item.price;
    let updatedItems;
    if(existingCartItem.quantity==1){
        updatedItems=state.items.filter(item=>item.id!=action.item.id);
    }else{
        const updatedItem={
            ...existingCartItem,quantity:existingCartItem.quantity-1
        }
        updatedItems=[...state.items];
        updatedItems[existingItemIndex]=updatedItem
    }
    // console.log(updatedItems);
    return {items:updatedItems,totalAmount:updatedTotalAmount}
  }

    return defaultState
}
const CartContextProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, defaultState)
    const addItemHandler = item => {
        dispatchCartAction({ type: 'ADD', item:item })
        console.log(item);
    }
    const removeItemHandler = item => {
        dispatchCartAction({ type: 'REMOVE', item:item })
    }
    return (
        <Cart.Provider value={{
            items:cartState.items,
            total:cartState.totalAmount,
            cartQuantity,
            addItemHandler,
            removeItemHandler,
        }
           
        }>{children}</Cart.Provider>
    )
}

export default CartContextProvider
export const CartContext=()=>{
    return useContext(Cart)
}