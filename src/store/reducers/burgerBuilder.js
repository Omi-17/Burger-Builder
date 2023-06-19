import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: {
        cheese: 0,
        aloo_patty: 0,
        salad: 0,
        paneer_patty: 0
    },
    totalPrice: 45,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    cheese: 10,
    aloo_patty: 25,
    salad: 5,
    paneer_patty: 40
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            cheese: action.ingredients.cheese,
            aloo_patty: action.ingredients.aloo_patty,
            salad: action.ingredients.salad,
            paneer_patty: action.ingredients.paneer_patty
        },
        totalPrice: 45,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        case "REDIRECT": return initialState
        default: return state;
    }
};

export default reducer;