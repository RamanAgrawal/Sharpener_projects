
import Button from "./UI/Button"
import PContext from "./store/product-contex"
import { useContext } from "react"

const ProductDisplay = props => {
    const ctx = useContext(PContext)
    return (
        <li>{props.obj.pname}-{props.obj.pprice}-{props.obj.pquentity}
            <Button onClick={() => { ctx.RemoveItem(props.id) }}> Delete</Button>
            <Button onClick={() => { ctx.EditItem(props.id) }}> Edit</Button>
        </li>)

}

export default ProductDisplay