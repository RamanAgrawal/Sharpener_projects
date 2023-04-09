import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useReducer } from 'react';


const defaultState = {
    items: [],
    totalAmount: 0,
}
let cartQuantity = 0
const Cart = React.createContext();
const reducer = (state, action) => {
    if (action.type === 'CHNG') {
        let updatedTotalAmount = 0
        console.log(action.item.data);
        action.item.data.forEach(item => ((
            updatedTotalAmount += +item.price * (+item.quantity),
            cartQuantity+=(+item.quantity))
        ))
        return { items: action.item.data, totalAmount: updatedTotalAmount }
    }
    if(action.type==='CLEAR'){
        cartQuantity = 0
        return { items: [], totalAmount: 0 }
    }
    if (action.type === 'ADD') {
        cartQuantity++
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex]
        // console.log(existingCartItem);
        let updatedItems
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        else { updatedItems = state.items.concat(action.item) }
        const updatedTotalAmount = state.totalAmount + action.item.price
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    if (action.type === 'REMOVE') {
        cartQuantity--;
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex]
        let updatedTotalAmount = state.totalAmount - action.item.price;
        let updatedItems;
        if (existingCartItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.item.id);
        } else {
            const updatedItem = {
                ...existingCartItem, quantity: existingCartItem.quantity - 1
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }
        // console.log(updatedItems);
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }

    return defaultState
}
const CartContextProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, defaultState)
    const [productitem, setproState] = useState({})
    const addItemHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
        // console.log(item);
    }
    const removeItemHandler = item => {
        dispatchCartAction({ type: 'REMOVE', item: item })
    }
    const clearContext=()=>{
        dispatchCartAction({type:'CLEAR'})
    }

    const sendItem = item => {
        setproState(item)
    }
    const replaceItem = (res) => {
        dispatchCartAction({ type: 'CHNG', item: res })
        // console.log(res);
    }

    useEffect(() => {
        const postHandler = async () => {
            const email = localStorage.getItem('email')
            if (email) {
                const username = email.replace('@', "").replace('.', "")
                try {
                    
                        if(cartState.items){
                        await axios.put(`https://my-first-project-c381c-default-rtdb.firebaseio.com/${username}.json`, {
                            data: cartState.items
                        })
                    }
                }
             catch (error) {
             }
        }
    }
        postHandler();
}, [cartState.items])
return (
    <Cart.Provider value={{
        items: cartState.items,
        total: cartState.totalAmount,
        cartQuantity,
        addItemHandler,
        removeItemHandler,
        sendItem,
        replaceItem,
        clearContext,
        productitem
    }

    }>{children}</Cart.Provider>
)
}

export default CartContextProvider
export const CartContext = () => {
    return useContext(Cart)
}