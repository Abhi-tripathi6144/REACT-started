import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// function H1(){    //component
//   return <h1>i am heading</h1>       //returning jsx (func which returns jsx is component)
// }
// //like App is a component
// createRoot(document.getElementById('root')).render(<H1/>);
createRoot(document.getElementById('root')).render(<App/>);
  
