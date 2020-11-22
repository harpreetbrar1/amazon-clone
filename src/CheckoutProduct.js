import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {UseStateValue} from './StateProvider';
import './CheckoutProduct.css'; 
function CheckoutProduct({ id, title, price, rating, image }) {

    const [{basket}, dispatch] = UseStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
                
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    <Rating name="read-only" value={rating} precision={0.5} readOnly />
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
