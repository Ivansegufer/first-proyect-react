import React from 'react';
import './../styles/styles.scss';
import Home from './pages/Home'
import Form from './pages/Form';
import Course from "./pages/Course";  
import Users from "./pages/Users"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Courses from './pages/Courses';
import MainMenu from './molecules/MainMenu';

const App = () => (
  <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cursos/:id" component={Course} />
        <Route path="/Cursos" component={Courses} />
        <Route path="/Formulario" component={() => <Form name="Porrio sensualon"/>} />
        <Route path="/Usuarios" component={Users} />
        <Route component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )} />
      </Switch>
  </Router>
);

export default App;
