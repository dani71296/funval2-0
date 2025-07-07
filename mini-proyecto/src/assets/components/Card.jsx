import React from 'react';

export default function Card({ stay }) {
  return (
    <div className="max-w-sm rounded-lg transform transition duration-300 hover:scale-105">
      <a href="#">
        <img
          className="w-full h-48 object-cover rounded-3xl"
          src={stay.photo}
          alt={stay.title}
        />
      </a>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="mb-3 font-normal text-gray-700">
            {stay.type}
            {stay.beds ? ` • ${stay.beds} beds` : ''}
          </p>
          <p className="text-sm text-yellow-600 font-medium">⭐ {stay.rating}</p>
        </div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black">{stay.title}</h5>
      </div>
    </div>
  );
}
