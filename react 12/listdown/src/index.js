// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// // import { ApolloClient, InMemoryCache,} from '@apollo/client';
// // import {ApolloProvider, BrowserRouter} from 'react-router-dom';
// // export const client=new ApolloClient({
// //   uri:'http://localhost/4000/graphql',
// //   cache:new InMemoryCache(),
// // });

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <ApolloProvider client={client}> */}
//       {/* <BrowserRouter> */}
//       <App/>
//       {/* </BrowserRouter> */}
//     {/* </ApolloProvider> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)