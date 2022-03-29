import React, {Component} from "react";
import {connect} from 'react-redux'
/* PropTypes */
import PropTypes from 'prop-types';

import * as actions from '../actions/index';

import Message from "../components/Message"

class MessageContainer extends Component {
    
    render(){
        var {message} = this.props;
    return (
        <Message message={message}/>
    );}
}

/* Kiem tra kieu cua props */
MessageContainer.propTypes = {
    //message: PropTypes.string.isRequired
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
    return { 
        message: state.message
    };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
