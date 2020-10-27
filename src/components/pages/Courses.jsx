import React from 'react'; 
import { connect } from 'react-redux';
import CourseGrid from '../organisms/CourseGrid';


const Courses = ({courses}) => (
  <CourseGrid courses={courses} />
); 

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
}); 
 
export default connect(mapStateToProps, {})(Courses);