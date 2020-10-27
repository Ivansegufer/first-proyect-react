import { composeWithDevTools } from 'redux-devtools-extension'; 
import { applyMiddleware, combineReducers, createStore } from 'redux'; 
import { ADD_TO_CART, GET_COURSE_LIST, REMOVE_TO_CART } from './acctions';
import thunk from 'redux-thunk';

const initialCart = {
    cart: []
}

const initialCourses = {
    courses: []
}

const cartReducer = (state = initialCart, {type, data}) => {
    let newState = state;  
    if(type === ADD_TO_CART)  
        newState = { ...state, cart: state.cart.concat(data) }
    else if(type === REMOVE_TO_CART) 
        newState = { ...state, cart: state.cart.filter(element => element !== data) }
    return newState;   
}  

const coursesReducer = (state = initialCourses, {type, data}) => {
    let newState = state; 
    if(type === GET_COURSE_LIST) {
        newState = { ...state, courses: data}
    } 
    return newState; 
}

export default createStore(combineReducers({cartReducer, coursesReducer}), composeWithDevTools(applyMiddleware(thunk)));

