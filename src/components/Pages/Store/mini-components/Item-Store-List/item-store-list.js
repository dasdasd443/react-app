import Images from '../../../../exportFiles/exportImages';
import Item from '../Item/item';
import {useSelector} from 'react-redux';
import './item-store-list.css';
let images = new Images();
const ItemStoreList = () => {
    const productList = useSelector(state => state.productList);
    
    const productListElements = productList.map(item => {
        return <Item key={item.id} itemName={item.itemName} image={item.image} price={parseInt(item.price)} id={item.id}/>
    });
    return (
        <section className="items-container">
            <section className="banner-3">
                <section className="banner-3__text">
                    <h1>iPhone 8</h1>
                    <span>Performance and design. Taken right to the edge</span>
                    <a href="">SHOP NOW</a>
                </section>
                <section className="banner-3__pic">
                    <img src={images.iPhone()} alt=""/>
                </section>
            </section>
            <div className="items-container-menusettings">
                <div className="items-container-menusettings--left">
                    <span className="items-container-menusettings--left--items">13 items</span>
                    <label htmlFor="" className="items-container-menusettings--left--sort">Sort By</label>
                    <select name="" id="" className="items-container-menusettings--left--selectNames">
                        <option value="">Name</option>
                    </select>
                    <label htmlFor="" className="items-container-menusettings--left--show">Show</label>
                    <select name="" id="" className="items-container-menusettings--left--number">
                        <option value="">12</option>
                    </select>
                </div>
                <div className="items-container-menusettings--icons">
                    <i className="fas fa-list-ul"></i>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className="items-container-menus">
                {productListElements}
            </div>

            <div className="items-container-menuNumbers">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
            </div>
        </section>
    );
}

export default ItemStoreList;