import './App.css';
import Header from './components/Header';
import Store from './components/Store';
import Footer from './components/Footer';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Contect from './components/Contect';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store/:productId' element={<ProductDetails/>}/>
        <Route path='/store' element={<Store/>}/>         
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
        <Footer />
    </div>

  );
}

export default App;
