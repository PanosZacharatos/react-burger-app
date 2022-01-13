import React from 'react';
import CartIcon from './CartIcon';
import classes from './Cart.module.css';

function Cart() {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span >Your Cart</span>
            <span className={classes.badge}>{0}</span>
        </button >
    )
}

export default Cart;