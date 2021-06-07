import ProductInformationCSS from './product-information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart, faHeart,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import Images from '../../../../exportFiles/exportImages';
import {useState} from 'react';


const ProductInformation = () => {
    let images = new Images();
    const [quantity, setQuantity] = useState(0);
    const [color,setColor] = useState("Black");
    const reduceQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity => quantity - 1);
        }
    }
    const addQuantity = () => {
        setQuantity(quantity => quantity + 1);
    }
    const [product_color, setProduct_color] = useState(2);

    const product_images = [
        {image1: images.BeatsSoloPink1(), image2: images.BeatsSoloPink2(), image3: images.BeatsSoloPink3(), image4: images.BeatsSoloPink4(), image5: images.BeatsSoloPink5()},
        {image1: images.BeatsSoloRed1(), image2: images.BeatsSoloRed2(), image3: images.BeatsSoloRed3(), image4: images.BeatsSoloRed4(), image5: images.BeatsSoloRed5()},
        {image1: images.BeatsSoloBlack1(), image2: images.BeatsSoloBlack2(), image3: images.BeatsSoloBlack3(), image4: images.BeatsSoloBlack4(), image5: images.BeatsSoloBlack5()},
        {image1: images.BeatsSoloWhite1(), image2: images.BeatsSoloWhite2(), image3: images.BeatsSoloWhite3(), image4: images.BeatsSoloWhite4(), image5: images.BeatsSoloWhite5()},
        {image1: images.BeatsSoloBrown1(), image2: images.BeatsSoloBrown2(), image3: images.BeatsSoloBrown3(), image4: images.BeatsSoloBrown4(), image5: images.BeatsSoloBrown5()}
    ]
    
    return (
            <section class="items-left" style={ProductInformationCSS}>
                <div class="items-left-details">
                    <div class="items-left-details--productImages">
                        <figure class="items-left-details--productImages--largeView">
                            <img src={product_images[product_color].image1} alt=""/>
                        </figure>
                        <div class="items-left-details--productImages--listImages">
                            <figure class="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image2} alt=""/></figure>
                            <figure class="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image3} alt=""/></figure>
                            <figure class="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image4} alt=""/></figure>
                            <figure class="items-left-details--productImages--listImages--small"><img src={product_images[product_color].image5} alt=""/></figure>
                        </div>
                    </div>
                    <div class="items-left-details-productDetails">
                        <h2 class="items-left-details-h2">Beats on Solo2 On Ear Headphones - {color}</h2>

                        <div class="items-left-details-productDetails-reviewDetails">
                            <div class="items-left-details-productDetails-reviewDetails--str">
                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            </div>
                            <span class="items-left-details-productDetails-reviewDetails--reviews">0 reviews</span>
                            <span class="items-left-details-productDetails-reviewDetails--subReviews">Submit a review</span>
                        </div>
                        <hr/>
                        <div class="bs-category-gallery--one--box--price items-container-menus-content--price price-bolder">
                            <p class="bs-category-gallery--one--box--price--enabled price-bolder-red" >$499</p>
                            <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        
                        <div class="stock">
                        <span class="stock--label">Availability :</span>
                        <span class="stock--value">In Stock</span>
                        </div>

                        <div class="category">
                        <span class="category--label">Category :</span>
                        <span class="category--value">Accessories</span>
                        </div>

                        <p class="items-left-details-productDetails-free"> Free Shipping</p>
                        
                        <hr/>

                        <div class="color">
                            <label for="" class="color-label">Select Color :</label> 
                            <label class="color-option">
                                <input name="color" type="radio" class="color-radio" onClick={() =>{setColor("Pink");setProduct_color(0)}}/>
                                <span class="pink"></span>
                                </label>
                                
                                <label class="color-option">
                                <input name="color" type="radio" class="color-radio" onClick={() => {setColor("Red"); setProduct_color(1)}}/>
                                <span class="red"></span>
                                </label>
                                
                                <label class="color-option">
                                <input name="color" type="radio" class="color-radio" onClick={() => {setColor("Black"); setProduct_color(2)}}/>
                                <span class="black"></span>
                                </label>

                                <label class="color-option">
                                <input name="color" type="radio" class="color-radio" onClick={() => {setColor("White"); setProduct_color(3)}}/>
                                <span class="white"></span>
                                </label>

                                <label class="color-option">
                                <input name="color" type="radio" class="color-radio" onClick={() => {setColor("Brown"); setProduct_color(4)}}/>
                                <span class="brown"></span>
                                </label>
                        </div>

                        <div class="sizing">
                        <label for="" class="sizing-label">Size</label>
                        <select name="" id="" class="sizing-select">
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                        </select>
                        </div>
                        <hr/>
                        <div class="bottomOptions">
                            <div class="numOrder">
                            <button class="numOrder--sub" onClick={reduceQuantity}><FontAwesomeIcon icon={faMinus}/></button>
                            <span class="numOrder--value">{quantity}</span>
                            <input class="numOrder--value__input" type="hidden" value="0"/>
                            <button class="numOrder--add" onClick={addQuantity}><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <div class="buttonCartheart">
                                <button class="buttonCartheart-add"><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
                                <button class="buttonCartheart-heart"><FontAwesomeIcon icon={faHeart}/></button>
                                </div>

                        </div>
                    </div>
                </div>

                <div class="socialmedia">
                    <button class="socialmedia--facebook"><FontAwesomeIcon icon={faFacebookF}/>Share on Facebook</button>
                    <button class="socialmedia--twitter"><FontAwesomeIcon icon={faTwitter}/>Share on Twitter</button>
                </div>

                <div class="productInformation">
                    <div class="productInformation-menu">
                        <a href="#">Product Information</a>
                        <a href="#">Reviews <span>0</span></a>
                        <a href="#">Another tab</a>
                    </div>
                    <hr class="productInformation--hr"/>
                    <p class="productInformation-p">
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