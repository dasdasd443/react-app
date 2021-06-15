import {faStar,faHeart,faShoppingCart,faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../store/action/store-actions';
import {addToFavorites, removeFromFavorites} from '../../store/action/favorites-action';
import {useState} from 'react';
import './best-seller-card.css';
const BestSellerCard = ({id,itemName, price, image,hotornot}) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const checkoutList = useSelector(state => state.checkoutProducts);
    const favorites = useSelector(state => state.favorites);
    const addToCartFunc = (id) => {
        let [item] = productList.filter(item => item.id==id); 
        item = {...item, quantity: 0, unitPrice: 0};
        setAddToCartButton(<FontAwesomeIcon icon={faCheck} className='overlay-icon disabled'/>)
        dispatch(addToCart(item));
    }

    const removeFromFavoritesFunc = (id) => {
        setAddToFavoritesButton(<FontAwesomeIcon icon={faHeart} onClick={()=>addToFavoritesFunc(id)} className='overlay-icon enabled'/>)
        dispatch(removeFromFavorites(id));
    }

    const addToFavoritesFunc = (id) => {
        
        let [item] = productList.filter(item => item.id==id);
        setAddToFavoritesButton(<FontAwesomeIcon icon={faHeart} onClick={ ()=>removeFromFavoritesFunc(id)} className='overlay-icon favorite enabled'/>)
        dispatch(addToFavorites(item));
    }
    const [addToCartButton, setAddToCartButton] = useState(
        (checkoutList.some(item => item.id == id)?<FontAwesomeIcon icon={faCheck} className='overlay-icon disabled'/>:<FontAwesomeIcon icon={faShoppingCart} onClick={() => addToCartFunc(id)} className='overlay-icon enabled'/>)
    );
    const [addToFavoritesButton, setAddToFavoritesButton] = useState(
        (favorites.some(item => item.id == id)? <FontAwesomeIcon icon={faHeart} onClick={ ()=>removeFromFavoritesFunc(id)} className='overlay-icon favorite enabled'/>: <FontAwesomeIcon icon={faHeart} onClick={() => addToFavoritesFunc(id)}className='overlay-icon enabled'/>)
    );
    return (
        <div className={`bs-category-gallery--one--box ${hotornot}`}>
            <div className="bs-category-gallery--one--box--image">
            <img src={image} alt="" />
            <div className="bs-category-gallery--one--box--image--overlay">
                {addToFavoritesButton}
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