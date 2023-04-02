
import './App.css';
import Header from './components/Header';
import Store from './components/Store';
import Footer from './components/Footer';

import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { CartContext } from './context/CartContext';
// import { IoMdTabletLandscape } from 'react-icons/io';

function App() {
  const {items}=CartContext()
  console.log(items);
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
          
        {/* </Route> */}
        <Route path='/about' element={<About/>}>
          
        </Route>
        
      </Routes>
        <Footer />
    </div>

  );
}

export default App;
