import BestSellerCSS from './product-bestsellers.css';
import Images from '../../../../exportFiles/exportImages';
let images = new Images();
const ProductBestSellers = () => {
    return (
        <section class="items-right">
                    <div class="items-right-bestSeller">
                        <h4 class="items-right-bestSeller-h4">BEST SELLER</h4>
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
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star bs-category-gallery--one--box--stars--last"></i>
                            </div>
                            <div class="bs-category-gallery--one--box--price">
                                <p class="bs-category-gallery--one--box--price--enabled" >$499</p>
                                <p class="bs-category-gallery--one--box--price--disabled">$599</p>
                            </div>
                        </div>
                    </div>
                    <div class="items-right-slides">
                        <div class="items-right-slides-button"></div>
                        <div class="items-right-slides-button"></div>
                        <div class="items-right-slides-button"></div>
                        <div class="items-right-slides-button"></div>
                    </div>
                    <div class="items-right-ads">
                        <h2 class="items-right-ads--h2">GoPro Hero 6</h2>
                        <p class="items-right-ads--p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p class="items-right-ads--price">$299</p>
                        <figure>
                        <img src={images.GoPro()} alt=""/>
                        </figure>
                    </div>
                </section>
    );
}
export default ProductBestSellers;