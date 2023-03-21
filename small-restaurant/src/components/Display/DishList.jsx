import ItemDisplay from "./ItemDisplay"
import './DishList.css'
const DishList=props=>{
    return(<>
           <div> <h3>Orders</h3></div>
        <div className="outer-div">
        <div className="inner-div">
            <h3>Table 1</h3>
            <ul>{props.dishes.map(data=>(
                data.table=='table1'&&<ItemDisplay id={data.id} key={data.id} obj={data}/>
            ))}</ul>
        </div>
        <div className="inner-div cen">
            <h3>Table 2</h3>
            <ul>{props.dishes.map(data=>(
                data.table=='table2'&&<ItemDisplay id={data.id} key={data.id} obj={data}/>
            ))}</ul>
        </div>
        <div className="inner-div">
            <h3>Table 3</h3>
            <ul>{props.dishes.map(data=>(
                data.table=='table3'&&<ItemDisplay id={data.id} key={data.id} obj={data}/>
            ))}</ul>
        </div>
        </div>
        </>
    )
    
}
export default DishList