import React, { Component } from 'react';

export default function withToCart(WrappedComponent) {
    return(
        class WithToCart extends Component {
            render() {
                if(!this.props.cart.includes(this.props.id))
                    return(<WrappedComponent {...this.props}
                        valueToShow={<button className="button--ghost-alert button--tiny"
                    onClick={() => this.props.addCourseToCart(this.props.id)}>{`$ ${this.props.price} USD`} </button>} /> ); 
                else    
                    return(<WrappedComponent {...this.props}
                        valueToShow={<button className="button--ghost-alert button--tiny"
                    onClick={() => this.props.removeCourseToCart(this.props.id)}>{'Remove to cart'} </button>} /> ); 
            }
        }
    ); 
}