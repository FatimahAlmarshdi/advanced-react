import React,{useState} from 'react'

export default function FormCountry() {
  const Countries=[
    { id:'1',name:'Saudi'},
    { id:'2',name:'Oman'},
    { id:'3',name:'Qatar'},
    { id:'4',name:'Jordan'}
   ];
   const [country,setCountry]= useState([]);
   const [newCountry,setNewCountry]= useState();

  const handleDelete=(id)=>{
    const Countries= country.filter(item=>item.id!=2)
    setCountry(Countries)
   

  }
  
  const handleAdd=(id)=>{
  console.log('')
   

  }
  return (
    <div>
        <input type="Text" style={{width:'100px', height:'20px', alignItems: 'center'}} placeholder='enter your city' value={country} onChange={
          event=>{
            setCountry(event.target.value)
          }}/>
        <button onClick={handleDelete}>delete</button> 
        <button onClick={handleAdd}>Add</button>
        
    </div>
  )
}
