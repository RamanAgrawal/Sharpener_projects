import { useRef } from "react"
import Button from "../UI/Button"
import './AddItems.css'
const AddItems = props => {
    const dishRef = useRef('')
    const priceRef = useRef('')
    const idRef = useRef('')
    const tableRef = useRef('')


    const AddDish = (e) => {
        e.preventDefault()
        const Dish = dishRef.current.value;
        const Price = priceRef.current.value;

        const id = idRef.current.value;
        const TableNo = tableRef.current.value;
        const cart = {
            
            id: id,
            dish: Dish,
            price: Price,
            table: TableNo
        }
        localStorage.setItem(cart.id, JSON.stringify(cart));
        props.onAdditem(cart)
        dishRef.current.value = "";
        priceRef.current.value = "";
        idRef.current.value = "";


    }
    return <form onSubmit={AddDish} className='form-control'>
        <label htmlFor="id">U.Id</label>
        <input type="number" ref={idRef} />
        <label htmlFor="dish">Choose Dish</label>
        <input type="text" id="dish" ref={dishRef} />
        <label htmlFor="price">Price</label>
        <input type="number" ref={priceRef} />
        <label htmlFor="table">Table No.</label>
        <select name="table" id="table" ref={tableRef}>
            <option value="table1"> Table 1</option>
            <option value="table2"> Table 2</option>
            <option value="table3"> Table 3</option>
        </select><br />
        <div className="action"> <Button type='submit'>Add to Bill</Button></div>
    </form>
}
export default AddItems