import * as types from './../constants/ActionType';
import * as Message from "./../constants/Message";
/* get data from local storage */
var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;

        case types.DELETE_PRODUCT_IN_CART:
            return Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;

        default: return [...state];
    }
}

export default message;