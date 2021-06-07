import {faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './best-seller-card.css';
const BestSellerCard = ({image,hotornot}) => {
    return (
        <div className={`bs-category-gallery--one--box ${hotornot}`}>
            <div className="bs-category-gallery--one--box--image">
            <img src={image} alt="" />
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
    );
}

export default BestSellerCard;