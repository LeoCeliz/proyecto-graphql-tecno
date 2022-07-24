import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "../pages/Login";
import Menu from '../pages/Menu';
import Docentepage from '../pages/Docentepage';
import Estudiantepage from '../pages/Estudiantepage';
import Materiapage from '../pages/Materiapage';
import Home from '../pages/DocenteHome';
import Home1 from '../pages/EstudianteHome';
import Home2 from '../pages/MateriaHome';
import "./styles.css"

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache:new InMemoryCache(),
});


function App() {
  console.log(window.location);
  const isLoginLocation = window.location.pathname === "/";
  return (
    <>
    <ApolloProvider client={client}>
  <Router>
  <div className="App">
  {!isLoginLocation && <Menu />}
    <section className="view-container">
  
     <Routes>

     <Route path="/" element={<Login />} />
        <Route path='/docentes' element={<Home/>}/>
        <Route path="/infodocentes/:id" element={<Docentepage />} />

        <Route path='/estudiantes' element={<Home1/>}/>
        <Route path="/infoestudiantes/:id" element={<Estudiantepage />} />


        <Route path='/materias' element={<Home2/>}/>
        <Route path="/infomaterias/:id" element={<Materiapage />} />


       
     </Routes>
    </section>
    </div>
    </Router>
    </ApolloProvider>
    </>
    
 
  );
}

export default App;
