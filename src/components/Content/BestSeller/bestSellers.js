import BestSellerCSS from './bestSeller.css';
import Images from '../../exportFiles/exportImages';
import BestSellerCard from '../../mini-component/best-seller-card';
import {useSelector} from 'react-redux';

let images = new Images();
const BestSeller = () => {
    const productList = useSelector(state => state.productList);
    const productsElement = productList.map((elem,index) => {
        return (index != 0)? <BestSellerCard id={elem.id} itemName={elem.itemName} price={elem.price} image={elem.image} hotornot="not"/>: <BestSellerCard id={elem.id} itemName={elem.itemName} price={elem.price} image={elem.image} hotornot="hot"/>
    });
    return (
        <section className="bs-category" style={BestSellerCSS}>
            <div className="bs-category-title">
                <h3 className="bs-category-title-h3">BEST SELLER</h3>
            </div>
            <div className="bs-category-menu">
                <nav className="bs-category-menu--nav" >
                    <ul className="bs-category-menu--ul">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Mac</a></li>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">iPad</a></li>
                        <li><a href="#">iPod</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </nav>
            </div>
            <div className="bs-category-gallery">
                
                <div className="bs-category-gallery--one">
                    {productsElement}
                </div>
            </div>
        
        <div className="load-link">
            <center><a href="#" className="load-link">LOAD MORE</a></center>
        </div>
        </section>
    );
}

export default BestSeller;