import './item.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faShoppingCart, faHeart, faBorderStyle} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {addToCart} from '../../../../../store/action/store-actions';
const Item = ({id,itemName, image, price}) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const checkoutList = useSelector(state => state.checkoutProducts);
    const addToCartFunc = (id) => {
        let [item] = productList.filter(item => item.id==id); 
        item = {...item, quantity: 1, unitPrice: item.price};
        setAddToCartButton(<button class="items-container-menus-content--buttons--add"><FontAwesomeIcon icon={faShoppingCart} /> mamayotay sa Adonis gaybar</button>)
        dispatch(addToCart(item));
    }
    const [addToCartButton, setAddToCartButton] = useState(
        (checkoutList.some(item => item.id == id)?<button class="items-container-menus-content--buttons--add"><FontAwesomeIcon icon={faShoppingCart} /> mamayotay sa Adonis gaybar</button>:<button class="enabled items-container-menus-content--buttons--add" onClick={() => addToCartFunc(id)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>)
    );
    return (
        <div>
            <div class="items-container-menus-boxes">
                <figure class="items-container-menus-boxes--img">
                    <img src={image} alt=""/>
                </figure>
                <div class="items-container-menus-content">
                    <h3 class="items-container-menus-content--h3">{itemName}</h3>
                    <div class="items-container-menus-content--smallDetails">
                        <div class="items-container-menus-content--smallDetails--str">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <span class="items-container-menus-content--smallDetails--reviews">0 reviews</span>
                        <span class="items-container-menus-content--smallDetails--subReviews">Submit a review</span>
                    </div>
                    <hr class="hr-properties"/>
                    <div class="bs-category-gallery--one--box--price items-container-menus-content--price">
                        <p class="bs-category-gallery--one--box--price--enabled" >${price}</p>
                        <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                    </div>
                    <p class="items-container-menus-content--p">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque harum magni eum iure dolores tempora facere blanditiis assumenda! Dolorem iste obcaecati
                        possimus.
                    </p>
                    <div class="items-container-menus-content--buttons">
                    {addToCartButton}
                    <button class="items-container-menus-content--buttons--heart"><FontAwesomeIcon icon={faHeart}/></button>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Item;