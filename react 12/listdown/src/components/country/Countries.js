
import React,{ useEffect,useState } from 'react';

export default function Countries() {

   
    const Countries=[
        { id:'1',name:'Saudi'},
        { id:'2',name:'Oman'},
        { id:'3',name:'Qatar'},
        { id:'4',name:'Jordan'}
       ];
       const states=[
        { id:"1",countryId:"1", name:"makkah"},
        { id:"1",countryId:"1", name:"sharqiyah"},
        { id:"2",countryId:"2", name:"MASSQAT"},
        { id:"3",countryId:"3", name:"doha"},
        { id:"4",countryId:"4", name:"amman"}
      ];
  
       const [state,setState]= useState([]);    
  const [country,setCountry]= useState([]);

  useEffect(()=>{
    setCountry(Countries);
  },[])
  const handleCountry= (id) => {
    const dt=states.filter(x=> x.countryId === id)
    setState(dt);
  }
  return (
    <div>Countries
    
     <select id="ddlcountry" className='form-control select-class' onChange={(e)=> handleCountry(e.target.value)}>
      <option value="0"> select country</option>
      { 
      country &&
      country !== undefined ?
      country.map((ctr,index) =>{
        return(
          
          <option  key={index} value={ctr.id}>{ctr.name}</option>
        
        )
      })
    
:'no country'
    }
      </select> 
      
    </div>
  )
}
