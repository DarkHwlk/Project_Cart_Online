import React, {Component} from "react";
import {connect} from 'react-redux'
/* PropTypes */
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as Message from './../constants/Message'

import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";

class CartContainer extends Component {
    
    render(){
        var {cart} = this.props;
    return (
        <Cart>
            {this.showCartItem(cart)}  {/*show tong item in cart*/}
            {this.showTotalAmount(cart)}  {/*show tong tien*/}
        </Cart>
    );}

    showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;  //thong bao neu cart rong
        if(cart.length > 0){
            result = cart.map((item, index) =>{
                return (
                    <CartItem 
                        key = {index}  //neu k co se bao warnning
                        item = {item}
                        onDelete = {this.props.onDeleteProductInCart}
                        onUpdate = {this.props.onUpdateProductInCart}
                        onChangeMessage = {this.props.onChangeMessage}
                        onUpdateAmount= {this.props.onUpdateAmount}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;  //thong bao cart rong
        if(cart.length > 0){
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}

/* Kiem tra kieu cua props */
CartContainer.propTypes = {
    // products phai la array va co phan tu ben trong
    cart: PropTypes.arrayOf(
        /* Kieu cua tung thanh phan trong array */
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        cart: state.cart,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actions.actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.actUpdateProductInCart(product, quantity));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
