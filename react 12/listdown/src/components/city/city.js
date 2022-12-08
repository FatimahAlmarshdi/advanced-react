import React,{ useEffect,useState } from 'react';


export default function city() {
    const states=[
        { id:"1",countryId:"1", name:"makkah"},
        { id:"1",countryId:"1", name:"sharqiyah"},
        { id:"2",countryId:"2", name:"MASSQAT"},
        { id:"3",countryId:"3", name:"doha"},
        { id:"4",countryId:"4", name:"amman"}
      ];
      const cities=[
        { id:"1",countryId:"1", name:"jdh"},
        { id:"1",countryId:"1", name:"dammam"},
        { id:"2",countryId:"2", name:"MASSQAT"}];

        const [city,setCity]= useState([]);
        const handleState= (id) => {
            const dt=cities.filter(x=> x.cityId === id);
            setCity(dt);
          }
          
  return (
    <div>city
        
      <select  id="ddlCity"  className='form-control select-class'onChange={(e)=> handleState(e.target.value)} >
      <option value="0"> select city</option>
      {
      city &&
      city !== undefined ?
      city.map((ctr,index) =>{
        return(
          <option key={index} value={ctr.id}>{ctr.name}</option>

        )
      })
    
:'no city'
    }
    </select>
    </div>
  )
}
