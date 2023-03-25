import React from "react";
import { useState } from "react";
const FoodContext = React.createContext({
    ShowCart: false,
    ShowCartHandler: () => { },
    HideCartHandler: () => { }
})

export const FoodContextProvider = props => {

    const [showCart, setShowCart] = useState(false)

    const ShowCartHandler = () => {
        setShowCart(true)

    }
    const HideCartHandler = () => {
        setShowCart(false)

    }
    return <FoodContext.Provider value={{
        ShowCart: showCart,
        ShowCartHandler: ShowCartHandler,
        HideCartHandler: HideCartHandler

    }}>{props.children}
    </FoodContext.Provider>
}

export default FoodContext