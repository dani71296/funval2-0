import React, { useState } from "react";

export default function Header({ onBuscar }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      onBuscar(search);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-6 mb-6">SnapShot</h1>

      <form onSubmit={handleSubmit} className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Buscar imágenes..."
          className="p-2 w-1/2 rounded-l"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
          🔍
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["Mountains", "Beaches", "Birds", "Food"].map((cat) => (
          <button
            key={cat}
            onClick={() => onBuscar(cat)}
            className="bg-gray-200 px-6 py-2 rounded-full w-48"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
