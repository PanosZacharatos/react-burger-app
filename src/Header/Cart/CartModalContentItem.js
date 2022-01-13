import React from 'react';
import classes from './CartModalContentItem.module.css';

function CartModalContentItem(props) {
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{`$${props.price.toFixed(2)}`}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartModalContentItem;
