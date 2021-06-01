import logo from './logo.svg';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Title from './components/title';
import Links from './components/links';
import Banner from './components/banner';
import BestSellers from './components/bestSellers';
import Newsletter from './components/newsletter';
import Banner2 from './components/banner-2';
import Categories from './components/categories';
import './App.css';

function App() {
  return (
    <div className = "container">
      <Newsletter/>
      <div style= {AppStyle} className="App">
        <Header/>
        <span className="line-title"></span>
        <Title/>
        <Links/>
      </div>
      <Banner/>
      <div className = "App">
          <BestSellers/>
      </div>
      <Banner2/>
      <div className = "App">
          <Categories/>
          <Footer/>
      </div>
    </div>
  );
}

const AppStyle = {
  
}
export default App;
