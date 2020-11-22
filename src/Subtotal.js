import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function SubTotal() {
    const [{ basket }, dispatch] = UseStateValue();

    return (
        <div className="subtotal">


            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            SubTotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
export default SubTotal;