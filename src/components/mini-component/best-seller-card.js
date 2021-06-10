import {faStar,faHeart,faShoppingCart,faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../store/action/store-actions';
import {useState} from 'react';
import './best-seller-card.css';
const BestSellerCard = ({id,itemName, price, image,hotornot}) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const checkoutList = useSelector(state => state.checkoutProducts);
    const addToCartFunc = (id) => {
        let [item] = productList.filter(item => item.id==id); 
        item = {...item, quantity: 1, unitPrice: item.price};
        setAddToCartButton(<FontAwesomeIcon icon={faCheck} className='overlay-icon disabled'/>)
        dispatch(addToCart(item));
    }
    const [addToCartButton, setAddToCartButton] = useState(
        (checkoutList.some(item => item.id == id)?<FontAwesomeIcon icon={faCheck} className='overlay-icon disabled'/>:<FontAwesomeIcon icon={faShoppingCart} onClick={() => addToCartFunc(id)} className='overlay-icon enabled'/>)
    );
    return (
        <div className={`bs-category-gallery--one--box ${hotornot}`}>
            <div className="bs-category-gallery--one--box--image">
            <img src={image} alt="" />
            <div className="bs-category-gallery--one--box--image--overlay">
                <FontAwesomeIcon icon={faHeart} className='overlay-icon enabled'/>
                {addToCartButton}
            </div>
            </div>
            <h4 className="bs-category-gallery--one--box--h4">{itemName}</h4>
            <div className="bs-category-gallery--one--box--stars">
            <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar} className = "bs-category-gallery--one--box--stars--last"/>
            </div>
            <div className="bs-category-gallery--one--box--price">
                <p className="bs-category-gallery--one--box--price--enabled" >${price}</p>
                <p className="bs-category-gallery--one--box--price--disabled">$599</p>
            </div>
        </div>
    );
}

export default BestSellerCard;