import React from 'react'
import './Product.css';
import Rating from '@material-ui/lab/Rating';
import { UseStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = UseStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating name="read-only" value={rating} precision={0.5} readOnly />
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
