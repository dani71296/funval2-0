
import Appbar from "./components/appbar"
import CategoryBar from "./components/CategoryBar"
export default function App() {
  return (
    <>
      <Appbar/>
    <main>
        
        <CategoryBar/>
        <div className="w-full p-4 grid cards-grid gap-6 justify-center" id="card_container" role="contenedor de las tarjetas de cada productos">
        
            <div className="shadow-xl w-80 rounded-md border border-gray-200 cursor-pointer" role="product card">
                <figure className="w-full aspect-square overflow-hidden">
                    <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="nombre del productos" className="w-full object-cover "/>
                </figure>
                <div aria-label="card content" className="px-4 pt-2 pb-4 border-t-1 flex flex-col gap-2 border-gray-300 text-gray-600">
                    <h3 className="text-xl text-black">Lapiz Labial</h3>  
                    <p>Precio: $25</p> 
                    <div className="flex  justify-between">
                        <span>Stock: 10</span>
                        <span>Rating: 4.5</span>
                    </div>
                </div>
            </div>
            



        </div>
        </main>

    </>
  )
}
