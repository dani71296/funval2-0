import React, { useState, useEffect } from 'react';
import Card from './Card'; // Ajusta la ruta según tu estructura

export default function Main() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch('/stays.json')
      .then((res) => res.json())
      .then((data) => setStays(data))
      .catch((err) => console.error('Error loading stays:', err));
  }, []);

  return (
    <main className="mt-12 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-900">STAYS IN</h1>
        <p className="text-sm text-gray-500">{stays.length}+ stays</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stays.map((stay, index) => (
          <Card key={index} stay={stay} />
        ))}
      </div>
    </main>
  );
}
