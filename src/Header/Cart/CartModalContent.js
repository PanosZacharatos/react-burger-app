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

    const handleOrder = () =>{
        //to be done 
        console.log('Ordering...');
    }

    const totalAmount = ctx.items.reduce((prev,cur)=>{
       return prev+(cur.amount*cur.price) 
    },0) ; 
   

    return (
        <CartModal>
            <ul className={classes['cart-items']}>
                {ctx.items.map(burger=><CartModalContentItem 
                        key={burger.id}
                        id={burger.id}
                        name={burger.name}
                        amount={burger.amount}
                        price={burger.price}
                    />)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{`$${totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={handleClose} >Close</button>
                {ctx.items.length && <button onClick={handleOrder} className={classes.button}>Order</button>}
            </div>
        </CartModal>
    )
}

export default CartModalContent;
