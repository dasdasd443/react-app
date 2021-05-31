import BestSellerCSS from './css/bestSeller.css';
import Images from './exportFiles/exportImages';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let images = new Images();
const BestSeller = () => {
    return (
        <section class="bs-category">
            <div class="bs-category-title">
                <h3 class="bs-category-title-h3">BEST SELLER</h3>
            </div>
            <div class="bs-category-menu">
                <nav class="bs-category-menu--nav" >
                    <ul class="bs-category-menu--ul">
                        <li><a href="">All</a></li>
                        <li><a href="">Mac</a></li>
                        <li><a href="">iPhone</a></li>
                        <li><a href="">iPad</a></li>
                        <li><a href="">iPod</a></li>
                        <li><a href="">Accessories</a></li>
                    </ul>
                </nav>
            </div>
            <div class="bs-category-gallery">

                <div class="bs-category-gallery--one">
                    <div class="bs-category-gallery--one--box hot">
                        <div class="bs-category-gallery--one--box--image">
                        <img src={images.AppleMac()} alt="" />
                        <div class="bs-category-gallery--one--box--image--overlay">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                        <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                        <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <i class="fas fa-star bs-category-gallery--one--box--stars--last"></i>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                </div>

                <div class="bs-category-gallery--two">
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                    <div class="bs-category-gallery--one--box">
                        <div class="bs-category-gallery--one--box--image">
                            <img src={images.AppleMac()} alt="" />
                            <div class="bs-category-gallery--one--box--image--overlay">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            </div>
                        <h4 class="bs-category-gallery--one--box--h4">Apple Macbook Pro</h4>
                        <div class="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div class="bs-category-gallery--one--box--price">
                            <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                    </div>
                </div>
            </div>
        
        <div class="load-link">
            <center><a href="" class="load-link">LOAD MORE</a></center>
        </div>
        </section>
    );
}

export default BestSeller;