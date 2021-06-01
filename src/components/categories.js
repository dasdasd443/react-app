import CategoriesCSS from './css/categories.css';
import {faDollarSign, faShippingFast, faHeadset,faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './exportFiles/exportImages';
let images = new Image();

const Categories = () => {
    return (
        <section className="others-category">
            <div className="others-category-freefundsupport">
                <div className="others-category-freefundsupport--box">
                    <FontAwesomeIcon icon={faShippingFast} className="others-category-freefundsupport--box--i"/>
                    <h3 className="others-category-freefundsupport--box--h3">FREE SHIPPING</h3>
                    <p  className="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                        mollitia maiores alias adipisci ipsa aperiam.
                    </p>
                </div>
                <div className="others-category-freefundsupport--box">
                <FontAwesomeIcon icon={faDollarSign} className="others-category-freefundsupport--box--i"/>
                    <h3 className="others-category-freefundsupport--box--h3">100% REFUND</h3>
                    <p  className="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                        mollitia maiores alias adipisci ipsa aperiam.
                    </p>
                </div>
                <div className="others-category-freefundsupport--box">
                <FontAwesomeIcon icon={faHeadset} className="others-category-freefundsupport--box--i"/>
                    <h3 className="others-category-freefundsupport--box--h3">SUPPORT 24/7</h3>
                    <p  className="others-category-freefundsupport--box--p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Non dolore accusamus libero accusantium, totam ipsum, natus quasi aliquid,
                        mollitia maiores alias adipisci ipsa aperiam.
                    </p>
                </div>
            </div>
            <div className="others-category-latestnews">
                <h2 className="others-category-latestnews-h2">LATEST NEWS</h2>
                <div className="others-category-latestnews--boxes">
                    <div className="others-category-latestnews--box">
                        <img src={images.SmartPhoneCard()} alt=""/>
                        <div className="others-category-latestnews--box--content">
                        <p className="others-category-latestnews--box--content--date">01 Jan, 2015</p>
                        <h5 className="others-category-latestnews--box--content--h5">Typesetting Industry</h5>
                        <p className="others-category-latestnews--box--content--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="others-category-latestnews--box">
                        <img src={images.LaptopLatestNews()} alt=""/>
                        <div className="others-category-latestnews--box--content">
                        <p className="others-category-latestnews--box--content--date">01 Jan, 2015</p>
                        <h5 className="others-category-latestnews--box--content--h5">Typesetting Industry</h5>
                        <p className="others-category-latestnews--box--content--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="others-category-latestnews--box">
                        <img src={images.PhoneLatestNews()} alt=""/>
                        <div className="others-category-latestnews--box--content">
                        <p className="others-category-latestnews--box--content--date">01 Jan, 2015</p>
                        <h5 className="others-category-latestnews--box--content--h5">Typesetting Industry</h5>
                        <p className="others-category-latestnews--box--content--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="others-category-latestnews">
                <h2 className="others-category-latestnews-h2">FEATURED PRODUCTS</h2>
                <div className="others-category-latestnews--boxes">
                    <div className="others-category-latestnews--box">
                        <img src={images.BeatsSolo()} alt="" className="others-category-latestnews--box--featured1Img"/>
                        <div className="others-category-latestnews--box--content">
                        <h5 className="others-category-latestnews--box--content--h5">Beats Solo 2 On Ear Headphones-Black</h5>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className="bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        </div>
                    </div>
                    <div className="others-category-latestnews--box">
                        <img src={images.HvTray()} alt="" className="others-category-latestnews--box--featured2Img"/>
                        <div className="others-category-latestnews--box--content">
                        <h5 className="others-category-latestnews--box--content--h5">H-Squared tvTray</h5>
                        <div className="bs-category-gallery--one--box--stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className="bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        </div>
                    </div>
                    <div className="others-category-latestnews--box">
                        <img src={images.RainGauge()} alt="" className="others-category-latestnews--box--featured3Img"/>
                        <div className="others-category-latestnews--box--content">
                        <h5 className="others-category-latestnews--box--content--h5">Netatmo Rain Gauge</h5>
                        <div className="bs-category-gallery--one--box--stars">
                        <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar} className="bs-category-gallery--one--box--stars--last"/>
                        </div>
                        <div className="bs-category-gallery--one--box--price">
                            <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                            <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="input-search">
                <input type="text" placeholder="Search query" className="input-search--inputs"/><button className="input-search--butn">Search</button>
            </div>
        </section>
    );
}

export default Categories;