import ReactDOM from 'react-dom';
import { FoodContextProvider } from './store/FoodContext';
import './index.css';
import App from './App';

ReactDOM.render(<FoodContextProvider><App /></FoodContextProvider>, document.getElementById('root'));
