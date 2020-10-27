import Axios from "axios";
import { ADD_TO_CART, GET_COURSE_LIST, REMOVE_TO_CART } from "./acctions";

const addToCart = courseId => ({
    type: ADD_TO_CART,
    data: courseId
});

const removeToCart = courseId => ({
    type: REMOVE_TO_CART,
    data: courseId
}); 

const getCourseList = () => dispatch => {
    Axios.get('https://my-json-server.typicode.com/Ivansegufer/json-db/cursos')
    .then(response => {
        return dispatch({
            type: GET_COURSE_LIST,
            data: response.data
        })
    }); 
}

export { addToCart, removeToCart, getCourseList }; 