//  import { gql } from 'apollo-server-express'
import React from 'react'
import './user.css'

// // const getLocation= gql`
// // query{
// //   getAllLocation{
// //     id
// //     region_id
// //     name
// //   }
// // }
// `
export default function User() {

    const handleSubmit=(e)=>{
        const fname=e.target.fname.value
        console.log('your Name:'+fname)
    }
  return (
   
    <div className='card'>
       <form onSubmit={handleSubmit}>
       <input type='text' name='fname' placeholder='your Name'/><br/>
        <button > submit</button>
        <div className='btn'>
<a href="/checkBox" class="btn">choose your region</a>
</div>

       </form>
       
       
       
      </div>
      
  )
}
