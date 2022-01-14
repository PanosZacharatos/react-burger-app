import React,{useState , useContext} from 'react';
import classes from  './MealItemsForm.module.css';
import CartContext from '../store/CartContextProvider';

function MealItemsForm(props) {
    const ctx = useContext(CartContext);
    const [amount,setAmount] = useState(1);

    const handleChange = (e) =>{
        setAmount(e.target.value)
    }

    const submitAmountForm = (e) =>{
        e.preventDefault();
        //console.log(props.name + ' ' + props.price + ' ' + amount );
        ctx.addItem({
            id:props.id,
            name:props.name,
            price: props.price,
            amount: +amount
        });
        setAmount(1)
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
                        min= {1}
                        max = {10}
                        step = {1}
                        value={amount}
                        onChange={handleChange}
                    />
                </div>
                <button>+</button>
            </form>
        </li>
    )
}

export default MealItemsForm;
