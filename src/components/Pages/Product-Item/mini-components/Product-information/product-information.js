import ProductInformationCSS from './product-information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart, faHeart,faPlus,faMinus,faStar} from '@fortawesome/free-solid-svg-icons';
import Images from '../../../../exportFiles/exportImages';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { minusQuantity , addQuantity} from '../../../../../store/action/current-product-actions';


const ProductInformation = ({id}) => {
    let images = new Images();
    const products = useSelector(state => state.productList);
    let [curProduct] = products.filter(item => item.id == id);
    curProduct = {...curProduct, quantity: 0};
    console.log(curProduct);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [color,setColor] = useState("Black");
    const [product_color, setProduct_color] = useState(2);
    
    return (
            <section className="items-left" style={ProductInformationCSS}>
                <div className="items-left-details">
                    <div className="items-left-details--productImages">
                        <figure className="items-left-details--productImages--largeView">
                            <img src={curProduct.image} alt=""/>
                        </figure>
                    </div>
                    <div className="items-left-details-productDetails">
                        <h2 className="items-left-details-h2">{curProduct.itemName || curProduct.title}</h2>

                        <div className="items-left-details-productDetails-reviewDetails">
                            <div className="items-left-details-productDetails-reviewDetails--str">
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <span className="items-left-details-productDetails-reviewDetails--reviews">0 reviews</span>
                            <span className="items-left-details-productDetails-reviewDetails--subReviews">Submit a review</span>
                        </div>
                        <hr/>
                        <div className="bs-category-gallery--one--box--price items-container-menus-content--price price-bolder">
                            <p className="bs-category-gallery--one--box--price--enabled price-bolder-red" >${curProduct.price.toFixed(2)}</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        
                        <div className="stock">
                        <span className="stock--label">Availability :</span>
                        <span className="stock--value">In Stock</span>
                        </div>

                        <div className="category">
                        <span className="category--label">Category :</span>
                        <span className="category--value">Accessories</span>
                        </div>

                        <p className="items-left-details-productDetails-free"> Free Shipping</p>
                        
                        <hr/>

                        <div className="color">
                            <label htmlFor="" className="color-label">Select Color :</label> 
                            <label className="color-option">
                                <input name="color" type="radio" className="color-radio" onClick={() =>{setColor("Pink");setProduct_color(0)}}/>
                                <span className="pink"></span>
                                </label>
                                
                                <label className="color-option">
                                <input name="color" type="radio" className="color-radio" onClick={() => {setColor("Red"); setProduct_color(1)}}/>
                                <span className="red"></span>
                                </label>
                                
                                <label className="color-option">
                                <input name="color" type="radio" className="color-radio" onClick={() => {setColor("Black"); setProduct_color(2)}}/>
                                <span className="black"></span>
                                </label>

                                <label className="color-option">
                                <input name="color" type="radio" className="color-radio" onClick={() => {setColor("White"); setProduct_color(3)}}/>
                                <span className="white"></span>
                                </label>

                                <label className="color-option">
                                <input name="color" type="radio" className="color-radio" onClick={() => {setColor("Brown"); setProduct_color(4)}}/>
                                <span className="brown"></span>
                                </label>
                        </div>

                        <div className="sizing">
                        <label htmlFor="" className="sizing-label">Size</label>
                        <select name="" id="" className="sizing-select">
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                        </select>
                        </div>
                        <hr/>
                        <div className="bottomOptions">
                            <div className="numOrder">
                            <button className="numOrder--sub" onClick={() => dispatch(minusQuantity(curProduct.id))}><FontAwesomeIcon icon={faMinus}/></button>
                            <span className="numOrder--value">{curProduct.quantity}</span>
                            <input className="numOrder--value__input" type="hidden" value={curProduct.quantity}/>
                            <button className="numOrder--add" onClick={() => dispatch(addQuantity(curProduct.id))}><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div className="buttonCartheart">
                                <button className="buttonCartheart-add"><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
                                <button className="buttonCartheart-heart"><FontAwesomeIcon icon={faHeart}/></button>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="socialmedia">
                    <button className="socialmedia--facebook"><FontAwesomeIcon icon={faFacebookF}/>Share on Facebook</button>
                    <button className="socialmedia--twitter"><FontAwesomeIcon icon={faTwitter}/>Share on Twitter</button>
                </div>

                <div className="productInformation">
                    <div className="productInformation-menu">
                        <a href="#">Product Information</a>
                        <a href="#">Reviews <span>0</span></a>
                        <a href="#">Another tab</a>
                    </div>
                    <hr className="productInformation--hr"/>
                    <p className="productInformation-p">
                        {curProduct.description}
                    </p>
                </div>
            </section>
    );
}

export default ProductInformation;