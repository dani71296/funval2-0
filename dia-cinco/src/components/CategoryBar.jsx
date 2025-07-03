import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function CategoryBar() {
  const [categories, setCategories]= useState([])
  async function fetchData() {
    try{
      const {data} = await axios.get("https://dummyjson.com/products/categories")
      console.log(data)
      setCategories(data)
    } catch (error){
      console.error(error)
    }
    
  }
  /*  cerrar bien la función CategoryBar, y también ejecutar la función 
  fetchData dentro de un useEffect para que se llame al montar el componente */
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <nav className=""  >
            <div className="flex flex-wrap gap-3 p-4" id="filter_options">
              {
                categories.map((category)=>{

                  return <button className="bg-gray-500 px-4 py-1 text-white rounded-md" value={category.slug}>
                    {category.name}
                </button>
                })
              }
                  
            </div>
        </nav>
  )
}
