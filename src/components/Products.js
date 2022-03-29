import React, {Component} from "react";

//import * as actions from '../actions';

class Products extends Component {
    
    render(){
    var {children} = this.props;  //lay children tu ProductsContainer
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {/* Product ... */}
                {children}
            </div>
        </section>
    );}

}

export default Products;
