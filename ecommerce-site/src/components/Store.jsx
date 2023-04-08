import React from 'react'
import Product from './Product'
import './Store.css'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const store = () => {
  const {isLoggedIn}=AuthContext()
  const productsArr = [

    {
      id: 'p1',
      title: 'Colors',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
      id: 'p2',
      title: 'Black and white Colors',

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
      id: 'p3',
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
      id: 'p4',
      title: 'Blue Color',

      price: 100,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

  ]
  return (<div> {isLoggedIn?<div>
    <div style={{
      height: '150px',
      width: '100%',
      textAlign: 'center',
      backgroundColor: "Highlight"
    }}>
      <h1 style={{ fontSize: "70px" }}>The Generics</h1>
    </div>
    <div className='store'>{productsArr.map(prod => (
      <Product prod={prod} key={prod.title} />
    ))}</div>
    <div className='app'><NavLink to='/cart'><Button variant='secondary'> See the Cart</Button></NavLink></div>)
    </div> :<h1 style={{ fontSize: "70px" }}>Access Denied</h1>
  } </div>
  )
}

export default store