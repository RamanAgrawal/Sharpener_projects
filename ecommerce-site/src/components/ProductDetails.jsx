import React from 'react'
import { Button,Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import rate from '../asset/rating.png'

const ProductDetails = (prod) => {

    const {productitem,addItemHandler}=CartContext()
    const param=useParams()
    console.log(param.productId);
    const additem=()=>{
        addItemHandler({...productitem,quantity:1})
        // console.log(productitem);
    }
    return (
        <Container className='h-100'>
            <div className='d-flex justify-content-evenly  border w-70 h-100'>
                <div className='text-center border w-50'>
                    <div>
                        <img className='w-50' src={productitem.imageUrl} alt="" />
                    </div>
                    <span></span>
                    <Button variant='success'onClick={additem}>Add to cart</Button>
                </div>

                <div className="detail border w-50">
                    <h2>{productitem.title}</h2>
                    <div>${productitem.price}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit! Velit a commodi quis, dicta deleniti voluptatum quibusdam? Repellendus ducimus ea laudantium ex, esse quisquam ipsa fugnsequatur, nisi quam similique numquam maxime a delectus saepe ratione sit. Excepturi iste repellat doloribus eligendi aperiam natus?</p>
                    <img src={rate} alt="" style={{width:'100px'}} />

                </div>

            </div>
        </Container>
    )
}

export default ProductDetails