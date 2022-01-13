import React from 'react';
import classes from  './MealItemsForm.module.css';

function MealItemsForm(props) {

    const submitAmountForm = (e) =>{
        e.preventDefault();
    };

    const connect= 'amount' + props.id
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <form className={classes.form} onSubmit={submitAmountForm}>
                <div className={classes.input}>
                    <label htmlFor={connect}>Amount</label>
                    <input 
                        id={connect}
                        type='number'
                        min='1'
                        max = '10'
                        step = '1'
                        defaultValue='1'
                    />
                </div>
                <button>+</button>
            </form>
        </li>
    )
}

export default MealItemsForm;
