import BestSellerCSS from './product-bestsellers.css';
import Images from '../../../../exportFiles/exportImages';
let images = new Images();
const ProductBestSellers = () => {
    return (
        <section className="items-right" style={BestSellerCSS}>
                    <div className="items-right-bestSeller">
                        <h4 className="items-right-bestSeller-h4">BEST SELLER</h4>
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
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star bs-category-gallery--one--box--stars--last"></i>
                            </div>
                            <div className="bs-category-gallery--one--box--price">
                                <p className="bs-category-gallery--one--box--price--enabled" >$499</p>
                                <p className="bs-category-gallery--one--box--price--disabled">$599</p>
                            </div>
                        </div>
                    </div>
                    <div className="items-right-slides">
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                        <div className="items-right-slides-button"></div>
                    </div>
                    <div className="items-right-ads">
                        <h2 className="items-right-ads--h2">GoPro Hero 6</h2>
                        <p className="items-right-ads--p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className="items-right-ads--price">$299</p>
                        <figure>
                        <img src={images.GoPro()} alt=""/>
                        </figure>
                    </div>
                </section>
    );
}
export default ProductBestSellers;