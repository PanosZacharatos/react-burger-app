import React,{useContext} from 'react';
import classes from './CartModalContentItem.module.css';
import CartContext from '../../store/CartContextProvider';


function CartModalContentItem(props) {

    const ctx = useContext(CartContext);
    const onAdd = () =>{
        //console.log(props.name + ' ' + props.price)
        
        ctx.addItem({
            name:props.name,
            price: props.price,
            amount: 1
        });
    }

    const onRemove = () =>{
        ctx.removeItem(props.id);
    };

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
                <button onClick={onRemove}>-</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartModalContentItem;
