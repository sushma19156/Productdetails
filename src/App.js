import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import Header from './compnents/Header';
import {  AiOutlineRight} from 'react-icons/ai';
import ProductDetails from './compnents/ProductDetails';
import Footer from './compnents/Footer';
import Heighlights from './compnents/Heighlights';
import Customer from './compnents/Customer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className="mini-header mt-3">
        <span>Home</span> <AiOutlineRight/>
        <span>Category</span> <AiOutlineRight/>
        <span>Sub-Category</span> 
      </div>
      <ProductDetails/>
      <Heighlights/> 
      <Footer/>
      </div>
  );
}

export default App;
