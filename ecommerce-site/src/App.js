import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import { AuthContext } from './context/AuthContext';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Sighup';
import Profile from './components/Authentication/Profile';
import { Suspense, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './context/CartContext';
import React from 'react';
import Loader from './ui/Loader';

const Store = React.lazy(() => import('./components/Store'))
const Cart = React.lazy(() => import('./components/Cart/Cart'))
const About = React.lazy(() => import('./components/About'))
const Contect = React.lazy(() => import('./components/Contect'))
function App() {
  const { replaceItem } = CartContext()
  const { isLoggedIn } = AuthContext()
  useEffect(() => {
    const getItemsHandler = async () => {
      const email = localStorage.getItem('email')
      if (email) {
        const username = email.replace('@', "").replace('.', "")
        try {
          const res = await axios(`https://my-first-project-c381c-default-rtdb.firebaseio.com/${username}.json`)

          if (res.data) {
            replaceItem(res.data)
          }
        } catch (error) {

        }
      }
    }
    getItemsHandler()
  }, [isLoggedIn])

  return (
    <div>

      <Suspense fallback={
        <div style={{ height: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
          <Loader />
        </div>}>  
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store/:productId' element={<ProductDetails />} />
          <Route path='/store' element={<Store />} />
          <Route path='/about' element={<About />} />
          {isLoggedIn &&
            <Route path='/cart' element={<Cart />} />}
          <Route path='/contect' element={<Contect />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </Suspense>
      <Footer />
    </div>

  );
}

export default App;
