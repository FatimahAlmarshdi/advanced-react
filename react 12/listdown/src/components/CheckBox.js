// import React, { useState } from 'react'

// export default function CheckBox() {

//     const [CheckedValuse,setValue]=useState([])
//     function handleChange(event){
//         const{value,checked}=event.target
//         if(checked){
//             setValue(pre=>[...pre.value])
//         }
//     }
//     console.log(CheckedValuse)
//   return (
//     <div className='checkBox'>

//         <h1> country</h1>
//         <div className='inputs'>
//             <input type='checkbox' value='saudi' onChange={handleChange}/>
//             <div className='inputs'>
//             <input type='checkbox' value='Oman' onChange={handleChange}/>
//             <input type='checkbox' value='saudi' onChange={handleChange}/>
//             <input type='checkbox' value='saudi' onChange={handleChange}/>
//             </div>
//         </div>




//     </div>
//   )
// }

import React, { useState } from "react";
import './checkbox.css'


export default function App() {

  return(
    <div className="card">
      <div className="card-header">title</div>
      <div className="card-body">
      <ul className="list">

<li className="item">  
<input type="checkbox" id="country"/>
<label htmlFor="country" > country <ul> 
<li> <input type="checkbox" id="country"/>saudi </li><br/>
<li> <input type="checkbox" id="country"/>USA </li></ul></label><br/>

<input type="checkbox" id="state"/>
<label htmlFor="state" > States <ul> 
<li> <input type="checkbox" id="country"/>makkah </li><br/>
<li> <input type="checkbox" id="country"/>NYY </li></ul></label><br/>
<input type="checkbox" id="country"/>
<label htmlFor="country" > country</label><br/>
</li>


</ul>
      </div>
      
    </div>




  )
}