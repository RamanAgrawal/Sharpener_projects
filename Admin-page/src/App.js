import { useState, useEffect, useContext } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import PContext from './components/store/product-contex';

function App() {
  const [Editlist,setList]=useState({})
  const ctx = useContext(PContext)
  console.log(ctx.items);
  console.log(ctx.EditItem);
  const [Productlist, setProduct] = useState([]);
  useEffect(() => {

    for (let i = 0; i < localStorage.length; i++) {
      const pro = (JSON.parse(localStorage.getItem(localStorage.key(i))))
      setProduct(prev => {
        return [...prev, pro]
      })

    }

  }, [])

  const Additem = pro => {
    setProduct(prev => {
      return [...prev, pro]
    })
  }
  const RemoveItem = (id) => {
    console.log(Productlist);
    const newProduct = Productlist.filter(value => value.id !== id)
    setProduct(newProduct);
    localStorage.removeItem(id)
    console.log(id);
  }
  const EditItem = (id) => {
    const obj = JSON.parse(localStorage.getItem(id))
    console.log(obj);
    setList(()=>{
      return obj
    })
    RemoveItem(id)

  }



  return (<PContext.Provider value={{
    items: Productlist,
    Additem: Additem,
    RemoveItem: RemoveItem,
    EditItem:EditItem,
    EditList:Editlist

  }} >
    <Navbar></Navbar>
    <AddProduct onAddproduct={Additem} />
    <ProductList pDetail={Productlist} />
  </PContext.Provider>
  );
}

export default App;
