// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-4">
      <h1 className="text-4xl font-bold mb-4 md:mb-0">The creative crew</h1>
      <div className="max-w-md">
        <h2 className="font-semibold text-lg mb-2">Who we are</h2>
        <p className="text-gray-700 text-sm">
          We are a team of creatively diverse. driven. innovative individuals working in various locations from the world.
        </p>
      </div>
    </header>
  );
}
