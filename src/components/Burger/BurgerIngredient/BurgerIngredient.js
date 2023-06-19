import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );
      break;
    case 'paneer_patty':
      ingredient = <div className={classes.Paneer_Patty} />;
      break;
    case 'cheese':
      ingredient = <div className={classes.Cheese} />;
      break;
    case 'aloo_patty':
      ingredient = <div className={classes.Aloo_Patty} />;
      break;
    case 'salad':
      ingredient = <div className={classes.Salad} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
