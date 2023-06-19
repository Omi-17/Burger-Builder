import React from 'react';
import Aux from '../../../hoc/Aux/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredients = {
    "Cheese": props.ingredients.cheese,
    "Aloo Patty(s)": props.ingredients.aloo_patty,
    "Salad": props.ingredients.salad,
    "Paneer Patty(s)": props.ingredients.paneer_patty,
  }
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>:{' '}
        {ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
