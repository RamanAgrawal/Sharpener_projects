import Button from "../../UI/Button"
import { useContext } from "react"
import BillContext from "../../store/Bill-context"
const ItemDisplay=props=>{
    const ctx=useContext(BillContext)
   
    return<li>
    {props.obj.dish}-{props.obj.price}-{props.id}
    <Button onClick={()=>{ctx.RemoveItem(props.id)}}>Delete</Button>
    </li>
}
export default ItemDisplay