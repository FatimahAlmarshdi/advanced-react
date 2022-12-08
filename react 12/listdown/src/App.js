// import React from 'react'
// import "./index.css";
// import './App.css';
// // import Users from './components/User'
// // import Admin from './components/Admin';


// // import CheckBox from './components/CheckBox';
// // import Home from './components/home';
// // import header from './components/header';
// // import logo from './components/logo'
//  import Navbar from './components/Navbar';
// import RouterApp from './components/RouterApp'


// function App() {
//   return(

// <div>
  
  
 

//   <RouterApp/>


// </div>
    
  
//   );

// }

// export default App;


import Navbar from "./components/Navbar"
import User from "./components/User"
import Home from "./components/home"
import Admin from "./components/Admin"
import CheckBox from './components/CheckBox'
import { Route, Routes } from "react-router-dom"
// import { useState, useRef} from 'react'; 
import Api from "./components/api"
import Countries from "./components/country/Countries"



function App() {
//   var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");

// var requestOptions = {
//   method: 'GET',
//   headers: headers,
//   redirect: 'follow'
// };

// fetch("http://localhost:4000/graphql", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
    

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/User' element={<User/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/CheckBox' element={<CheckBox/>}/>
        
        <Route path='/API' element={<Api/>}/>
        <Route path='/Countries' element={<Countries/>}/>
      
      </Routes>

      </div>
    </>
  )
}

export default App