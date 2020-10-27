import React from 'react'; 
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom'; 
import { addToCart, removeToCart } from '../../redux/acctionCreator';
import { connect } from 'react-redux';
import withToCart from '../hoc/withToCart';

const CourseCard = ({id, title, image, price, professor, addCourseToCart, removeCourseToCart, cart, valueToShow}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`Cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-main-center">
                { professor }
            </div>
            <div className="s-main-center">
                {valueToShow}
                {/* <button className="button--ghost-alert button--tiny"
                onClick={() => addCourseToCart(id)}>{valueToShow} </button> */}
            </div>
        </div>
    </article>
); 

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.string
}

CourseCard.defaultProps = {
    title: "No se encontró título",
    image: "http://www.ciudaddelapunta.com/sitio/fotos/ciudad/miniaturas/006.jpg",
    price: "--",
    profesor: ""
}

const mapStateToProps = state => ({
    cart: state.cartReducer.cart
});

const mapDispatchToProps = dispatch => ({
    addCourseToCart(id) {
        dispatch(addToCart(id)); 
    },
    removeCourseToCart(id) {
        dispatch(removeToCart(id)); 
    }
});  

export default connect(mapStateToProps, mapDispatchToProps)(withToCart(CourseCard)); 