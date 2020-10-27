import React from 'react'; 
import { connect } from 'react-redux'; 

const Cart = ({cartCounter}) => (
    <li>
        <button className="button tiny ghost">Carrito: {cartCounter}</button>
    </li>
); 

const mapStateToProps = state => ({
    cartCounter: state.cartReducer.cart.length
}); 

const mapDispatchToProps = () => ({}); 

export default connect(mapStateToProps, mapDispatchToProps)(Cart); 