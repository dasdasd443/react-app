import Header from '../../Header/header';
import Title from '../../Header/Title/title';
import Links from '../../Header/Links/links';
import Navigation from '../../Header/Navigation/navigation';
import Images from '../../exportFiles/exportImages';
import ItemList from './mini-components/Item/item-list';
import {useSelector} from 'react-redux';
import './checkout.css';
let images = new Images();
const Checkout = () => {
    const products = useSelector(state => state.checkoutProducts);
    const productsElement = products.map(item => 
        <section key={item.id}><ItemList id={item.id} itemName={item.itemName} image={item.image} price={parseInt(item.price)} quantity={item.quantity}/><hr/></section>
    );
    return (
        <div className='App'>
                <div className='container'>
                    <Header/>
                    <Title/>
                    <Links/>
                    <Navigation/>
                    <section className='page11'>
                        <div className="container items-list">
                            <section className="items-list__header">
                                <h1>Product</h1>
                                <h1>Price</h1>
                                <h1>QTY</h1>
                                <h1>Unit Price</h1>
                            </section>
                            <hr/>
                            {productsElement}
                        </div>
                        <div className="total">
                        <section className="voucher">
                            <form action="">
                                <input type="text" name="" placeholder="Voucher Code" id="voucher-code"/>
                                <button>Redeem</button>
                            </form>
                        </section>
                        <form action="" className="checkout">
                            <section className="checkout-container">
                                <ul className="checkout-container__price-list">
                                    <li><span>Subtotal</span><span className='sub-total'>$0</span></li>
                                    <li><span>Shipping fee</span><span>$20</span></li>
                                    <li><span>Coupon</span><span>No</span></li>
                                </ul>
                            </section>
                            <hr/>
                            <section className="checkout-container__total">
                                <h1>Total</h1>
                                <h1 className="total-price">$20</h1>
                            </section>
                            <button>Checkout</button>
                        </form>
                        </div>
                    </section>
                </div>
        </div>
    );
}

export default Checkout;