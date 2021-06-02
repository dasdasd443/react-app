import BestSellerCSS from './bestSeller.css';
import Images from '../../exportFiles/exportImages';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BestSellerCard from '../../mini-component/best-seller-card';

let images = new Images();
const BestSeller = () => {
    return (
        <section className="bs-category">
            <div className="bs-category-title">
                <h3 className="bs-category-title-h3">BEST SELLER</h3>
            </div>
            <div className="bs-category-menu">
                <nav className="bs-category-menu--nav" >
                    <ul className="bs-category-menu--ul">
                        <li><a href="">All</a></li>
                        <li><a href="">Mac</a></li>
                        <li><a href="">iPhone</a></li>
                        <li><a href="">iPad</a></li>
                        <li><a href="">iPod</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </nav>
            </div>
            <div className="bs-category-gallery">
                
                <div className="bs-category-gallery--one">
                    <BestSellerCard image={images.AppleMac()} hotornot="hot"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                </div>

                <div className="bs-category-gallery--two">
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                </div>
            </div>
        
        <div className="load-link">
            <center><a href="" className="load-link">LOAD MORE</a></center>
        </div>
        </section>
    );
}

export default BestSeller;