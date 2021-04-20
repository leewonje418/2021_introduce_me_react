import React from 'react';
import { Link, Route } from 'react-router-dom';
import {Project1, Project2} from './'

const Projects = () => {
  return (
    <div>
      <h2>지금까지 해온 프로젝트 입니다.</h2>
      <ul>
        <li><Link to="/projects/1">My_Blog</Link></li>
        <li><Link to="/projects/2">TMS</Link></li>
      </ul>
      <Route exact path="/projects/1" component={Project1}/>
      <Route exact path="/projects/2" component={Project2}/>
    </div>
  );
};

export default Projects;