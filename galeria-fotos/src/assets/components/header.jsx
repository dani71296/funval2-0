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
    <div className="text-center mt-30">
      <h1 className="text-4xl font-bold mt-6 mb-6">SnapShot</h1>

      <form onSubmit={handleSubmit} className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 w-1/2 rounded-l max-w-xl bg-gray-200 rounded shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4">
          🔍
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {["Mountains", "Beaches", "Birds", "Food"].map((cat) => (
          <button
            key={cat}
            onClick={() => onBuscar(cat)}
            className="bg-blue-900 hover:bg-blue-700 text-white px-4 py-2  w-28 h-8 text-sm font-semibold shadow"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
