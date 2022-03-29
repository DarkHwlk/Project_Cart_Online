import * as types from './../constants/ActionType';
/* get data from local storage */
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var {product, quantity} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            /* Cach cua minh */
            // var new_product = {
            //     product: action.product,
            //     quantity: action.quantity
            // };
            // var new_state = [];
            // for(var i = 0; i < state.length; i++){
            //     /* Neu da co item in cart */
            //     if(new_product.product.id == state[i].product.id){
            //         /* Tang quantity */    
            //         new_product = {
            //             product: action.product,
            //             quantity: state[i].quantity + 1
            //         }  
            //         state.splice(i,1);   
            //         new_state  = [
            //             ...state,
            //             new_product];
            //         return new_state;
            //     }
            // } 
            // new_state  = [
            //     ...state,
            //     new_product]; 
            // return new_state;

            /* Cach cua ng ta */
            index = findProductInCart(state, product);
            if(index !== -1){  //tim thay
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];
        
        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){  //Tim thay
                state.splice(index, 1);  //Xoa phan tu bat dau tu vi tri index va xoa 1 phan tu
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){  //Tim thay
                state[index].quantity = quantity;
            }
            localStorage.setItem("CART", JSON.stringify(state));
            return [...state];

        default: return [...state];
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if(cart.length > 0) {
        for(var i = 0; i < cart.length; i++){
            if(product.id === cart[i].product.id){
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;