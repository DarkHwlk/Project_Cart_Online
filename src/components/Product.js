import React, {Component} from "react";
import * as Message from "../constants/Message";

class Product extends Component {
  render(){
    var {product, cart} = this.props;

    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                    <a>
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{product.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {this.showRating(product.rating)}
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left price-type">{product.price}.000VND</span>
                        <span className="right">
                            <a 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick={() => this.onAddToCart(product)}    
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                        <span className="left inventory-type">Amount: {this.showAmountProduct(cart, product)}</span>
                    </div>
                </div>
            </div>
        </div>
    );}

    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

    showRating = (rating) => {
        var result = [];
        for(var i=1; i <= rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j=1; j <= (5-rating); j++){
            result.push(<i key={j+4} className="fa fa-star-o"></i>);
        }
        return result;  //result la mot mang  cac html cua star/star-o
    }

    showAmountProduct = (cart, product) => {
        var result = product.inventory;
        var index = this.findProductInCart(cart, product);
        if(index !== -1){  //Tim thay
            result = result - cart[index].quantity;
        }
        return result;
    }

    findProductInCart = (cart, product) => {
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
}

export default Product;
