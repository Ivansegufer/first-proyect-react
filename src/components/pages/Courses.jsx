import React, { Component } from 'react'; 
import axios from 'axios';
import CourseGrid from '../organisms/CourseGrid';

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/Ivansegufer/json-db/cursos')
    .then(resp => this.setState({
      courses: resp.data
    }))
  }

  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />
  }
  
}

export default Courses;