import { Fragment } from 'react';
import mealsImage from '../assets/meals.jpg';
import classes from './Header.module.css';
import Cart from './Cart/Cart' ; 
import CartModal from './Cart/CartModal';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Burger App</h1>
        <Cart />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
      <CartModal />
    </Fragment>
  );
};

export default Header;
