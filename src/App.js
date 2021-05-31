import logo from './logo.svg';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Title from './components/title';
import Links from './components/links';
import Banner from './components/banner';
import BestSellers from './components/bestSellers';
import './App.css';

function App() {
  return (
    <div className = "container">
      <div style= {AppStyle} className="App">
        <Header/>
        <span className="line-title"></span>
        <Title/>
        <Links/>
      </div>
      <Banner/>
      <div className = "App">
          <BestSellers/>
        <Footer/>
      </div>
    </div>
  );
}

const AppStyle = {
  
}
export default App;
