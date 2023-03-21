import Card from "./UI/Card"
import ProductDisplay from "./ProductDisplay";
import './ProductList.css'
const ProductList = props => {

    // console.log(props.pDetail);
    return <Card className={'outer-div'}>
        <div className="inner-div">
            <h3>Others</h3>
            <ul>{props.pDetail.map(data =>
                (data.pcategory == 'others' &&<ProductDisplay key={data.id} id={data.id} obj={data}/>)
            )}</ul>
        </div>
        <div className="inner-div" style={{
            borderInline:"3px solid black "
        }}>
         <h3>food</h3>
            <ul>{props.pDetail.map(data =>
                (data.pcategory == 'food' &&<ProductDisplay key={data.id} id={data.id} obj={data}/>
            ))}</ul>
        </div>
        <div className="inner-div">
            <h3>electric</h3>
            <ul>{props.pDetail.map(data=>
               ( data.pcategory=='electronics'&&<ProductDisplay key={data.id} id={data.id} obj={data}/>)
            )}</ul>
        </div>
    </Card>
}
export default ProductList