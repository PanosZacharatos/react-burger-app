import React from 'react';
import Card from '../UI/Card';
import MealItemsForm from './MealItemsForm';
import classes from './MealItems.module.css';


const DUMMY_BURGER_DB = [
    {
      id: 'b1',
      name: 'Classic Cheeseburger',
      description: 'Brioche, double cheddar , soho sauce ',
      price: 7.50,
    },
    {
      id: 'b2',
      name: 'Greek burger',
      description: 'A greek speciality!',
      price: 8.80,
    },
    {
      id: 'b3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.50,
    },
    {
      id: 'b4',
      name: 'Spicy burger',
      description: 'Spicy...and extra spicy...',
      price: 13.80,
    },
  ];




function MealItems() {

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_BURGER_DB.map(burger=><MealItemsForm 
                        key={burger.id}
                        id={burger.id}
                        name={burger.name}
                        description={burger.description}
                        price ={burger.price}
                    />)}
                </ul>
            </Card>
        </section>
    )
}

export default MealItems;
