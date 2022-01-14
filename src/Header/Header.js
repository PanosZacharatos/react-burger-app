import { Fragment,useContext } from 'react';
import mealsImage from '../assets/meals.jpg';
import classes from './Header.module.css';
import Cart from './Cart/Cart' ; 
import CartModalContent from './Cart/CartModalContent';
import CartContext from '../store/CartContextProvider';

const Header = (props) => {
  const ctx = useContext(CartContext);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Burger App</h1>
        <Cart />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
      {(ctx.items.length) && (!ctx.hideModal) &&<CartModalContent />}
    </Fragment>
  );
};

export default Header;
