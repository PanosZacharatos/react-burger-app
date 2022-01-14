import React, {useContext} from 'react';
import CartIcon from './CartIcon';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContextProvider';


function Cart() {
    const ctx = useContext(CartContext);

    const handleClick = () => {
        ctx.changeModalStatus() ;
    };

    return (
        <button className={classes.button} onClick={handleClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span >Your Cart</span>
            <span className={classes.badge}>{ctx.items.length}</span>
        </button >
    )
}

export default Cart;
