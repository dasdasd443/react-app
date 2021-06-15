
import './App.css';
import Index from './components/Pages/Index/index';
import ProductsPage from './components/Pages/Products/products-page';
import Login from './components/Pages/Login/login';
import Signup from './components/Pages/Signup/signup';
import Checkout from './components/Pages/Checkout/checkout';
import Store from './components/Pages/Store/store';
import ProductItem from './components/Pages/Product-Item/product-item';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/product" component = {ProductsPage}/>
        <Route path="/login" component = {Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/store" component={Store}/>
        <Route path="/product-item/:id" component={ProductItem}/>
      </Switch>
    </Router>
  );
}

export default App;
