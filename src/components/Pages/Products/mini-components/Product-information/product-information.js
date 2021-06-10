import ProductInformationCSS from './product-information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart, faHeart,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import Images from '../../../../exportFiles/exportImages';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { minusQuantity , addQuantity} from '../../../../../store/action/current-product-actions';


const ProductInformation = () => {
    let images = new Images();
    const curProduct = useSelector(state => state.currentProduct);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [color,setColor] = useState("Black");
    const [product_color, setProduct_color] = useState(2);

    const product_images = [
        {image1: images.BeatsSoloPink1(), image2: images.BeatsSoloPink2(), image3: images.BeatsSoloPink3(), image4: images.BeatsSoloPink4(), image5: images.BeatsSoloPink5()},
        {image1: images.BeatsSoloRed1(), image2: images.BeatsSoloRed2(), image3: images.BeatsSoloRed3(), image4: images.BeatsSoloRed4(), image5: images.BeatsSoloRed5()},
        {image1: images.BeatsSoloBlack1(), image2: images.BeatsSoloBlack2(), image3: images.BeatsSoloBlack3(), image4: images.BeatsSoloBlack4(), image5: images.BeatsSoloBlack5()},
        {image1: images.BeatsSoloWhite1(), image2: images.BeatsSoloWhite2(), image3: images.BeatsSoloWhite3(), image4: images.BeatsSoloWhite4(), image5: images.BeatsSoloWhite5()},
        {image1: images.BeatsSoloBrown1(), image2: images.BeatsSoloBrown2(), image3: images.BeatsSoloBrown3(), image4: images.BeatsSoloBrown4(), image5: images.BeatsSoloBrown5()}
    ]
    
    return (
            <section className="items-left" style={ProductInformationCSS}>
                <div className="items-left-details">
                    <div className="items-left-details--productImages">
                        <figure className="items-left-details--productImages--largeView">
                            <img src={product_images[product_color].image1} alt=""/>
                        </figure>
                        <div className="items-left-details--productImages--listImages">
                            <figure className="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image2} alt=""/></figure>
                            <figure className="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image3} alt=""/></figure>
                            <figure className="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image4} alt=""/></figure>
                            <figure className="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image5} alt=""/></figure>
                        </div>
                    </div>
                    <div className="items-left-details-productDetails">
                        <h2 className="items-left-details-h2">{curProduct.itemName} - {curProduct.color}</h2>

                        <div className="items-left-details-productDetails-reviewDetails">
                            <div className="items-left-details-productDetails-reviewDetails--str">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <span className="items-left-details-productDetails-reviewDetails--reviews">0 reviews</span>
                            <span className="items-left-details-productDetails-reviewDetails--subReviews">Submit a review</span>
                        </div>
                        <hr/>
                        <div className="bs-category-gallery--one--box--price items-container-menus-content--price price-bolder">
                            <p className="bs-category-gallery--one--box--price--enabled price-bolder-red" >$499</p>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sit nesciunt sapiente ipsum laudantium in deleniti ipsam omnis, doloribus, hic veritatis magni temporibus quos, sed possimus fuga distinctio laboriosam maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque unde tempore hic sed cupiditate, natus placeat fuga porro corrupti reprehenderit veniam praesentium pariatur impedit neque dicta sint. Sunt, qui asperiores!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta, consequuntur facilis adipisci unde omnis amet assumenda labore magni necessitatibus eum veniam libero maiores odit in quaerat? Quo, dicta molestias.
                        <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt in eaque! Harum possimus mollitia dolorem. Voluptatum asperiores quo accusamus natus? Dolore veritatis id accusamus dolorem deleniti odit consequuntur doloremque!
                    </p>
                </div>
            </section>
    );
}

export default ProductInformation;