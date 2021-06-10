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
        <section class="items-container">
            <section class="banner-3">
                <section class="banner-3__text">
                    <h1>iPhone 8</h1>
                    <span>Performance and design. Taken right to the edge</span>
                    <a href="">SHOP NOW</a>
                </section>
                <section class="banner-3__pic">
                    <img src={images.iPhone()} alt=""/>
                </section>
            </section>
            <div class="items-container-menusettings">
                <div class="items-container-menusettings--left">
                    <span class="items-container-menusettings--left--items">13 items</span>
                    <label for="" class="items-container-menusettings--left--sort">Sort By</label>
                    <select name="" id="" class="items-container-menusettings--left--selectNames">
                        <option value="">Name</option>
                    </select>
                    <label for="" class="items-container-menusettings--left--show">Show</label>
                    <select name="" id="" class="items-container-menusettings--left--number">
                        <option value="">12</option>
                    </select>
                </div>
                <div class="items-container-menusettings--icons">
                    <i class="fas fa-list-ul"></i>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
            <div class="items-container-menus">
                {productListElements}
            </div>

            <div class="items-container-menuNumbers">
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