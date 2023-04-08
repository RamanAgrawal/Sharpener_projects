import React from 'react'
import { Button,Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

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
                    <span>{productitem.title}</span>
                    <div>${productitem.price}</div>
                    <div>5</div>

                </div>

            </div>
        </Container>
    )
}

export default ProductDetails