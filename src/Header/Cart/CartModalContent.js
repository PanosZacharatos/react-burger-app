import React from 'react';
import CartModal from './CartModal';
import classes from './CartModalContent.module.css' ;
import CartModalContentItem from './CartModalContentItem';

function CartModalContent() {

    const testForNow = [{
        id:'b214',
        name: 'Burger',
        amount: 2,
        add : ()=>{},
        remove: ()=>{}
    },
    {
        id:'b21',
        name: 'Burger1',
        amount: 3,
        add : ()=>{},
        remove: ()=>{}
    }
    ]

    return (
        <CartModal>
            <ul className={classes['cart-items']}>
                {testForNow.map(burger=><CartModalContentItem 
                        key={burger.id}
                        name={burger.name}
                        amount={burger.amount}
                        add={burger.add}
                        remove={burger.remove}
                        price={23.50}
                    />)}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{0}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </CartModal>
    )
}

export default CartModalContent;
