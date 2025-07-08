import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function Main({ filter }) {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);

  useEffect(() => {
    fetch('/stays.json')
      .then(res => res.json())
      .then(data => setStays(data))
      .catch(err => console.error('Error loading stays:', err));
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredStays(stays);
      return;
    }

    const filtered = stays.filter((stay) => {
      const matchCity = stay.city.toLowerCase().includes(filter.location.toLowerCase());
      const guestsTotal = filter.guests;
      const stayMaxGuests = stay.maxGuests || 0;

      return matchCity && guestsTotal <= stayMaxGuests;
    });

    setFilteredStays(filtered);
  }, [filter, stays]);

  return (
    <main className="mt-12 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-900">STAYS</h1>
        <p className="text-sm text-gray-500">{filteredStays.length}+ stays</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStays.map((stay, index) => (
          <Card key={index} stay={stay} />
        ))}
      </div>
    </main>
  );
}
