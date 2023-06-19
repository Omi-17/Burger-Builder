import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseBurgerStart() );
        axios.post( 'https://burger-builder-588c8-default-rtdb.firebaseio.com/orders.json?auth=' + token , orderData )
            .then( response => {
                alert("Order Accepted");
                dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseBurgerFail( error ) );
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token //+ 'orderBy=' + '"userID"' + '&equalTo="' + userId + '"';
        axios.get( 'https://burger-builder-588c8-default-rtdb.firebaseio.com/orders.json' + queryParams)
            .then( res => {
                const fetchedOrders = [];
                let checkOrders = {};
                for ( let key in res.data ) {
                    checkOrders = {
                        ...res.data[key],
                        id: key
                    };
                    if(userId === checkOrders.userId)
                    {
                        fetchedOrders.push( {
                            ...res.data[key],
                            id: key
                        } );
                    }
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};