import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = {
        "Cheese": props.ingredients.cheese,
        "Aloo Patty(s)": props.ingredients.aloo_patty,
        "Salad": props.ingredients.salad,
        "Paneer Patty(s)": props.ingredients.paneer_patty,
    }

    const ingredientOutput = Object.keys(ingredients).map(ig => {
        return <li key={ig}><span>{ig}</span>: {ingredients[ig]}</li>;
    });

    return (
        <div className={classes.Order}>
            <h3>Order Id: {props.id}</h3>
            <p>Ingredients</p>
            {ingredientOutput}
            <p>Price:&nbsp; ₹{Number.parseFloat(props.price).toFixed(2)}</p>
        </div>
    );
};

export default order;