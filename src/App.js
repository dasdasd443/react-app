import logo from './logo.svg';
import './App.css';
import Index from './components/Pages/Index/index';
import ProductsPage from './components/Pages/Products/products-page';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}/>
        <Route path="/product" component = {ProductsPage}/>
      </Switch>
    </Router>
  );
}

export default App;
