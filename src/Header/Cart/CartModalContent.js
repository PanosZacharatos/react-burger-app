import React,{useContext} from 'react';
import CartModal from './CartModal';
import classes from './CartModalContent.module.css' ;
import CartModalContentItem from './CartModalContentItem';
import CartContext from '../../store/CartContextProvider';


function CartModalContent() {
    const ctx = useContext(CartContext);
    const handleClose = () =>{
        ctx.changeModalStatus();
    };

   

    return (
        <CartModal>
            <ul className={classes['cart-items']}>
                {ctx.items.map(burger=><CartModalContentItem 
                        key={burger.id}
                        name={burger.name}
                        amount={burger.amount}
                        price={burger.price}
                    />)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{0}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={handleClose} >Close</button>
                {ctx.items.length && <button className={classes.button}>Order</button>}
            </div>
        </CartModal>
    )
}

export default CartModalContent;
