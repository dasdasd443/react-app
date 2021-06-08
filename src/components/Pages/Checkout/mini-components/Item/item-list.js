import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {checkoutdecrement, checkoutincrement} from '../../../../../store/action';
const ItemList = ({id,itemName, image, price,quantity}) => {
    const dispatch = useDispatch();

    const updateQuantity = (e) => {
        console.log(e.target.value);
    }

    const removeElement = () => {
        //console.log(this);
    }
    return (
        <section className="items-list__item">
                            <section className="items-list__item--name">
                                <section className="items-list__item--name__delete">
                                    <FontAwesomeIcon icon={faTimes} onClick={removeElement(this)}/>
                                    <span className='background'></span>
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
                            <h1 className='unit-price'>$0</h1>
                        </section>
    );
}

export default ItemList;