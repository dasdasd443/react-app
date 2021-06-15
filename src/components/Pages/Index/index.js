import Header from '../../Header/header.js';
import Footer from '../../Footer/footer.js';
import Title from '../../Header/Title/title';
import Links from '../../Header/Links/links';
import Banner from '../../Content/Banner/banner';
import BestSellers from '../../Content/BestSeller/bestSellers';
import Newsletter from '../../Content/Newsletter/newsletter';
import Banner2 from '../../Content/Banner2/banner-2';
import Categories from '../../Footer/Categories/categories';
import IndexCSS from './index.css';
import {setInitialProducts} from '../../../store/action/store-actions';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const Index = () => {
    //fuck you javascript, to set the initial products of the store to the default Rakuten, remove the API call and setInitialProducts dispatch
    const [products,setProducts] = useState();
    const [isLoaded, setisLoaded] = useState(false);
    const dispatch = useDispatch();
    async function getData(){
        const response = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>json);
        setProducts(response);
        return response;
    }
    if(!isLoaded){
        getData();
        if(products){
            setisLoaded(true);
            dispatch(setInitialProducts(products));
        }
    }
    console.log(products);
    return (
            <div className = "container" style={IndexCSS}>
                <Newsletter classsName="newsletter"/>
                <div className="App">
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

export default Index;
