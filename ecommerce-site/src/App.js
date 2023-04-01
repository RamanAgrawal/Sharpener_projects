
import './App.css';
import Header from './components/Header';
import Store from './components/Store';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <Store />
      <div className='app'><Button variant='secondary'> See the Cart</Button></div>
      <Footer />
    </div>

  );
}

export default App;
