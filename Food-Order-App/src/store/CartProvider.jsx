import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingItemIndex];
        let updatedItems;
        if (existingCartItem) {

            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return { items: updatedItems, totalAmount: updatedTotalAmount };
    };
    if (action.type === 'REMOVE') {
        console.log(action.id);
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        console.log(existingItemIndex);
        const existingCartItem = state.items[existingItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount };

    }
    return defaultCartState
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemstoCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    }
    const removeItemstoCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
        console.log(id);
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemstoCartHandler,
        removeItem: removeItemstoCartHandler

    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider