import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home';
import CreateStudent from './components/students/CreateStudent';
import EditStudent from './components/students/EditStudent';
import ListStudent from './components/students/ListStudent';
import CreateTeacher from './components/teachers/CreateTeacher';
import EditTeacher from './components/teachers/EditTeacher';
import ListTeacher from './components/teachers/ListTeacher';


function App() {
  return (
    <div className="container">
      <nav className='navbar navbar-expand-lg navbar-white bg-info'>
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}> CRUD </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'> Home </Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul className="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/createStudent' className='nav-link'> Criar Estudante </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/listStudent' className='nav-link'> Listar Estudante </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul className="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/createTeacher' className='nav-link'> Criar Professor </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/listTeacher' className='nav-link'> Listar Professor </Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createStudent' element={<CreateStudent />} />
        <Route path='/listStudent' element={<ListStudent />} />
        <Route path='/editStudent' element={<EditStudent />} />
        <Route path='/createTeacher' element={<CreateTeacher />} />
        <Route path='/listTeacher' element={<ListTeacher />} />
        <Route path='/editTeacher' element={<EditTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
