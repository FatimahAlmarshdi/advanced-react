// //import logo from './logo.svg';
// import React,{ useEffect,useState } from 'react';



// export default function Admin() {
  
   
//   const Countries=[
//    { id:'1',name:'Saudi'},
//    { id:'2',name:'Oman'},
//    { id:'3',name:'Qatar'},
//    { id:'4',name:'Jordan'}
//   ];
//   const states=[
//     { id:"1",countryId:"1", name:"makkah"},
//     { id:"1",countryId:"1", name:"sharqiyah"},
//     { id:"2",countryId:"2", name:"MASSQAT"},
//     { id:"3",countryId:"3", name:"doha"},
//     { id:"4",countryId:"4", name:"amman"}
//   ];
//   const cities=[
//     { id:"1",countryId:"1", name:"jdh"},
//     { id:"1",countryId:"1", name:"dammam"},
//     { id:"2",countryId:"2", name:"MASSQAT"},
//     { id:"4",countryId:"4", name:"amman"}
//   ]
//   const [country,setCountry]= useState([]);
//   const [state,setState]= useState([]);
//   const [city,setCity]= useState([]);


//   useEffect(()=>{
//     setCountry(Countries);
//   },[])

//   const handleCountry= (id) => {
//     const dt=states.filter(x=> x.countryId === id)
//     setState(dt);
//   }
//  const  updateCountries=(e)=>{
//     console.log(e.target.value)
//   }

//   const handleState= (id) => {
//     const dt=cities.filter(x=> x.cityId === id);
//     setCity(dt);
//   }
  
//   const handlesubmit=(e)=>{
//     console.log("")
//   }
  

  
  

//   return (
//     <div className="App">
//    <div className='option'>
//    <select style={{}}>
//    <div>
        
       
//       </div>
//       <option value="javascript"> Javacript book</option>
//       <option value="git"> Git book</option>
//       <option value="html"> Html book</option>
//     </select>
//     <input type="text" onChange={""}/>
//     <button type="submit"> add</button>
     
    


         
//    </div>
      
//       <select id="ddlcountry" className='form-control select-class' onChange={(e)=> handleCountry(e.target.value)}>
//       <option value="0"> select country</option>
//       { 
//       country &&
//       country !== undefined ?
//       country.map((ctr,index) =>{
//         return(
          
//           <option key={index} value={ctr.id}>{ctr.name} &&
          
// <button onClick={(e) => this.deleteRow(index, e)}>Delete Row</button></option>
        
//         )
//       })
    
// :'no country'
//     }
//       </select>
//       <br></br>
//       <select  id="ddlstates"  className='form-control select-class' >
//       <option value="0"> select state</option>
//       {
//       state &&
//       state !== undefined ?
//       state.map((ctr,index) =>{
//         return(
//           <option key={index} value={ctr.id}>{ctr.name}</option>
        
//         )
//       })
    
// :'no states'
//     }
//       </select>
//       <select  id="ddlCity"  className='form-control select-class'onChange={(e)=> handleState(e.target.value)} >
//       <option value="0"> select city</option>
//       {
//       city &&
//       city !== undefined ?
//       city.map((ctr,index) =>{
//         return(
//           <option key={index} value={ctr.id}>{ctr.name}</option>
        
//         )
//       })
    
// :'no city'
//     }
  
//       </select><br/>
//       <button type="button" onClick= {handlesubmit} >submit</button><br/>
      
//     </div>

//   );
// }


import React,{useState} from 'react'
import FormCountry from './country/formCountry'
import Countries from './country/Countries'

export default function 
() {
  const [country,setCountry]= useState([]);

 const addCountry = country=> setCountry([...country,country]);
  return (
    <div>
      <section className='appAdmin'>
       <form>
       <h1>choies  region</h1>
        <FormCountry addCountryPrp={addCountry} />
        <Countries />
       

       </form>


      </section>
    </div>
  )
}





