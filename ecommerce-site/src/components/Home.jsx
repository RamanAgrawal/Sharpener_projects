import React from 'react'
import './Home.css'
import colors from '../asset/color.png'
const Home = () => {
  return (
    <div style={{height:'100vh'}}>
    <div className='d-flex justify-content-center home-back' style={{
      height: '300px',
      width: '100%',
      textAlign: 'center',
      // backgroundColor: "Highlight",
      alignItems:"center",      
    }}>
      <h1 className='home' style={{ fontSize: "70px" }}>The Generics</h1>
    </div>
    <div className='why'>
      <img src={colors} alt="" />
      <h3>Why Shop With Us</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt odio dignissimos esse sapiente quia optio voluptatem repudiandae fuga eaque est.</p>
    </div>
    </div>
  )
}

export default Home