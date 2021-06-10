import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {checkoutdecrement, checkoutincrement,deleteItem} from '../../../../../store/action/action';
const ItemList = ({id,itemName, image, price,quantity, unitPrice}) => {
    const dispatch = useDispatch();

    const updateQuantity = (e) => {
        console.log(e.target.value);
    }

    return (
        <section className="items-list__item">
                            <section className="items-list__item--name">
                                <section className="items-list__item--name__delete">
                                    <FontAwesomeIcon icon={faTimes} />
                                    <span className='background' onClick={()=> dispatch(deleteItem(id))}></span>
                                </section>
                                <section className="image-container">
                                    <img src={image} alt=""/>
                                </section>
                                <h1>{itemName}</h1>
                            </section>
                            <h1>${price}</h1>
                            <input type="hidden" className='price' value={price}/>
                            <section className="items-list__item--quantity">
                                <form action="" onSubmit={ e => e.preventDefault()}>
                                    <button className='minus-quantity' onClick={() => dispatch(checkoutdecrement(id))}><FontAwesomeIcon icon={faMinus}/></button>
                                    <input type="number" name="quantity" className="quantity" min="0" value={quantity} onChange={updateQuantity}/>
                                    <button className='add-quantity' onClick={() => dispatch(checkoutincrement(id))}><FontAwesomeIcon icon={faPlus}/></button>
                                </form>
                            </section>
                            <input type="hidden" name="" value="0" className="unit-price-hidden"/>
                            <h1 className='unit-price'>${unitPrice}</h1>
                        </section>
    );
}

export default ItemList;