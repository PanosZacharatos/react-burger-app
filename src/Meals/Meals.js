import React from 'react';
import MealsSummary from './MealsSummary';
import MealItems from './MealItems';

function Meals() {
    return (
        <React.Fragment>
            <MealsSummary />
            <MealItems />
        </React.Fragment>
    )
}

export default Meals;
