import React from 'react';

 function api() {
var id ="1"
var name="saudi"
var region_id="0"
const  query = `query{
        getAllLocation{
           id
          region_id
           name
     
         }
        }
         
       `
const api =async body=> 
await  fetch('http://localhost:4000/graphql', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
    'Accept': 'application/json',
            
          },
          body:({ query,
            variables:{LocationInput: { id, name ,region_id} }})
          
         })
         .then(r => r.json())
         .then(data => console.log('data returned:', data));
       

return <div></div>
        }
api()

export default api;

//  export const getAllLocation= async (region_id) =>{
//   let query = `{ 
//     getAllLocation(region_id: "${region_id.location}") { 
//     id 
//        region_id 
//       name  } 
//      } `}
  
//    return await fetchApi(query) 
 
// export const addlocation = async (region_id, location) => {
//      let mutation =`mutation  {
//        addlocation(locationInput: { 
//         region_id: "${region_id.location}"
//          region: "${location.location}"
//          }) {
//           id 
//        region_id 
//       name 
//          }`}
        
//    return await fetchApi(mutation)
        
//      const fetchApi= async body => 
//      await fetch("http://localhost:4000/graphql", {
//       method: 'POST' ,
//       headers: {"Content-Type": "application/json"},
//        body: JSON.stringify({query: body })
//         })

//      .then(response => response.json()) 
//      .catch(err=> console.log(err))
