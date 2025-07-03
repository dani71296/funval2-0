import axios from "axios" /* paso 1 instalar axios con npm install axios */
/* paso 2 importar axios */
import { useEffect, useState } from "react" /* paso 3 importar estos */


export default function App() {
  /* paso 4 realizar una funcion para extraer o consumir una api */
  const [data,setdata]=useState([]) 
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then
    ((response)=>{
      console.log(response.data)
    })
  },[])
  return (
    <div>
      <h1 className='bg-blue-400'>hola mundo</h1>
    </div>
  )
}
