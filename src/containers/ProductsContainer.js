import React, {Component} from "react";
import {connect} from 'react-redux'
/* PropTypes */
import PropTypes from 'prop-types';

import * as actions from '../actions/index';

import Products from "../components/Products";
import Product from "../components/Product";

class ProductsContainer extends Component {
    
    render(){
    var {products, cart} = this.props;

    return (
        //<Products products={products}/>
        <Products>
            {this.showProducts(products, cart)}
        </Products>
    );}

    showProducts = (products, cart) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product, index) => {
                return (
                    <Product 
                        key={index} 
                        product={product}
                        cart={cart}
                        onAddToCart={this.props.onAddToCart}
                        onChangeMessage={this.props.onChangeMessage}
                    />
                );
            });  //result la mot mang cac html cua product
        }
        return result;
    }
}

/* Kiem tra kieu cua props */
ProductsContainer.propTypes = {
    // products phai la array va co phan tu ben trong
    products: PropTypes.arrayOf(
        /* Kieu cua tung thanh phan trong array */
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        products: state.products,
        cart: state.cart,
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
