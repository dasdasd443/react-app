import BestSellerCSS from './css/bestSeller.css';
import Images from './exportFiles/exportImages';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    <div className="bs-category-gallery--one--box hot">
                        <div className="bs-category-gallery--one--box--image">
                        <img src={images.AppleMac()} alt="" />
                        <div className="bs-category-gallery--one--box--image--overlay">
                            <i className="fas fa-heart"></i>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                        <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                        <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                </div>

                <div className="bs-category-gallery--two">
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div className="bs-category-gallery--one--box">
                        <div className="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div className="bs-category-gallery--one--box--image--overlay">
                                <i className="fas fa-heart"></i>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 className="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className="load-link">
            <center><a href="" className="load-link">LOAD MORE</a></center>
        </div>
        </section>
    );
}

export default BestSeller;