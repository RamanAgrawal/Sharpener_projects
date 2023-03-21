import { useRef, useContext, useEffect } from "react";
import Button from "./UI/Button";
import Card from "./UI/Card";
import PContext from "./store/product-contex";
import './AddProduct.css'
const AddProduct = (props) => {
    const ctx = useContext(PContext)
    const pnameRef = useRef('')
    const pPriceRef = useRef('')
    const pQuentityRef = useRef('')
    const pCategoryRef = useRef('')
    let id=Math.random().toString()
    useEffect(()=>{
        
        if (Object. keys(ctx.EditList).length) {
            pnameRef.current.value = ctx.EditList.pname
            pPriceRef.current.value = ctx.EditList.pprice
            pQuentityRef.current.value = ctx.EditList.pquentity
            pCategoryRef.current.value = ctx.EditList.pcategory
            id=ctx.EditList.id
            
        }
    },[ctx.EditList])
    const newProduct = (e) => {
        e.preventDefault();
        const ProductName = pnameRef.current.value;
        const ProductPrice = pPriceRef.current.value;
        const ProductQuentity = pQuentityRef.current.value;
        const ProductCategory = pCategoryRef.current.value;
        const proObj = {
            id: id,
            pname: ProductName,
            pprice: ProductPrice,
            pquentity: ProductQuentity,
            pcategory: ProductCategory
        }
        localStorage.setItem(proObj.id, JSON.stringify(proObj))
        props.onAddproduct(proObj)
        pnameRef.current.value = ''
        pPriceRef.current.value = ''
        pQuentityRef.current.value = ''
        pCategoryRef.current.value = ''
        
    }
       
    
    return (
        <Card className={'form-control'}>
            <form onSubmit={newProduct}>

                <label htmlFor="product">Product name </label>
                <input id="product" type="text"
                    required ref={pnameRef} />
                <label htmlFor="price">Price</label>
                <input id="price" type="number" ref={pPriceRef} required />
                <label htmlFor="quentity" style={{
                    color: "Highlight"
                }}>Quentity </label>
                <input id="quentity" type="number" ref={pQuentityRef} required />
                <label htmlFor="category">Category   </label>
                <select name="category" id="category" ref={pCategoryRef} required>
                    <option value="others">Others</option>
                    <option value="food">Food</option>
                    <option value="electronics">Electronics</option>
                </select><br />
                <div className="btn"><Button type="submit">Add Product</Button></div>
            </form>
        </Card>
    
    )
}
export default AddProduct