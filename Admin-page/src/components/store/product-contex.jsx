import React from "react"

const PContext = React.createContext({
    items:[],
    Additem:()=>{},
    RemoveItem:()=>{},
    EditItem:()=>{},
    EditList:{}
})

export default PContext