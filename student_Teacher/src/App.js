import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Rotas } from './components/routes/routes.jsx'
//import { Link } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'


function App() {
  return (
    <div className="container">
      < NavBar />
      < Rotas />
    </div>
  );
}

export default App;
