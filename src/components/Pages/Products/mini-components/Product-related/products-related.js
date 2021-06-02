
import BestSellerCard from '../../../../mini-component/best-seller-card';
import ProductsRelatedCSS from './products-related.css';
import Images from '../../../../exportFiles/exportImages';
let images = new Images();
const ProductsRelated = () => {
    return (
        <section class="related-products" style={ProductsRelatedCSS}>
                <h2 class="related-products-title">RELATED PRODUCTS</h2>

                <div class="bs-category-gallery--one">
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                    <BestSellerCard image={images.AppleMac()} hotornot="not"/>
                </div>
            </section>
    );
}

export default ProductsRelated;