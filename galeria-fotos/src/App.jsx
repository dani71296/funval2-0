import React, { useState, useEffect } from "react";
import { fetchImages } from "./assets/api/pexels";
import Header from "./assets/components/header";
import ImageGrid from "./assets/components/ImageGrid";/* generalmente nombres con mayusculas al inicio */

export default function App() {
  const [images, setImages] = useState([]);
  
  const buscarCategoria = async (categoria) => {
    const fotos = await fetchImages(categoria);
    setImages(fotos);
  };

  useEffect(() => {
    buscarCategoria("mountains");
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header onBuscar={buscarCategoria} />
      <ImageGrid images={images} />
    </div>
  );
}