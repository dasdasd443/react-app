import ProductsPageCSS from './products-page.css';
import Header from '../../Header/header.js';
import Title from '../../Header/Title/title';
import Links from '../../Header/Links/links';
import Navigation from '../../Header/Navigation/navigation';
import ProductInformation from './mini-components/Product-information/product-information';
import ProductBestSellers from './mini-components/Product-Bestsellers/product-bestsellers';
import ProductsRelated from './mini-components/Product-related/products-related';
import Footer from '../../Footer/footer';

const ProductsPage = () => {
    return (
        <div className = "container" style={ProductsPageCSS}>
                <div className="App">
                    <Header/>
                    <span className="line-title"></span>
                    <Title/>
                    <Links/>
                    <Navigation/>
                    <section className="main">
                        <ProductInformation className="main__product-information"/>
                        <ProductBestSellers className="main__product-bestsellers"/>
                    </section>
                    <ProductsRelated/>
                    <Footer/>
                </div>
            </div>
    );
}

export default ProductsPage;