import React from 'react'
import { UseStateValue } from './StateProvider'
import SubTotal from './Subtotal';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket }] = UseStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg" alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>You have no items in your shopping basket. To buy one or more items,
                        click "Add to Basket" next to item
                    </h2>
                    </div>
                ) : (<div>
                    <h2 className="checkout__title"> Your Shopping Basket</h2>
                    {basket.map((item, index) => (
                        <CheckoutProduct key={index}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}
                </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
