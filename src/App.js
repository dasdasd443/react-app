
import './App.css';
import Index from './components/Pages/Index/index';
import ProductsPage from './components/Pages/Products/products-page';
import Login from './components/Pages/Login/login';
import Signup from './components/Pages/Signup/signup';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/product" component = {ProductsPage}/>
        <Route path="/login" component = {Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
