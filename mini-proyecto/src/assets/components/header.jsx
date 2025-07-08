import React, { useState, useEffect } from 'react';
import GuestModal from './GuestModal';

export default function Header({
  location,
  setLocation,
  adults,
  setAdults,
  children,
  setChildren,
  modalVisible,
  setModalVisible,
  onSearch,
}) {
  const [sugerencias, setSugerencias] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  

  useEffect(() => {
    fetch('/stays.json')
      .then(res => res.json())
      .then(data => {
        const soloCiudades = Array.from(new Set(data.map(item => item.city)));
        setCiudades(soloCiudades);
      })
      .catch(error => console.error('Error al cargar JSON:', error));
  }, []);

  useEffect(() => {
    if (location.trim() === '') {
      setSugerencias([]);
      return;
    }
    const coincidencias = ciudades.filter(ciudad =>
      ciudad.toLowerCase().includes(location.toLowerCase())
    );
    setSugerencias(coincidencias);
  }, [location, ciudades]);

  const totalGuests = adults + children;

  return (
    <header>
      <div>
        <img src="/logo-f7862584.svg" alt="logo de proyecto" />
      </div>
      <div className="buscador">
        <div className="bg-white rounded-2xl shadow-md border border-gray-300 mt-4 flex items-center justify-between gap-2 p-1 md:absolute md:right-8 md:top-4 max-w-md mx-auto divide-x divide-gray-300 h-15">
          {/* Add Location */}
          <div className="px-4 py-2 relative">
            <input
              id="location-input"
              type="text"
              placeholder="Add location"
              className="w-full outline-none"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
            {sugerencias.length > 0 && (
              <div className="bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto absolute z-10 w-full">
                {sugerencias.map((ciudad, index) => (
                  <p
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setLocation(ciudad);
                      setSugerencias([]);
                    }}
                  >
                    {ciudad}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Guests */}
          <div className="px-4 py-2">
            <input
              id="guests-input"
              type="text"
              placeholder="Add guests"
              className="w-full outline-none"
              readOnly
              value={totalGuests > 0 ? `${totalGuests} guests` : ''}
              onClick={() => setModalVisible(true)}
            />
          </div>

          {/* Search Button */}
          <div className="px-4 py-2 flex items-center justify-center">
            <button
              id="search-btn-main"
              className="bg-white p-2 rounded hover:bg-red-600 flex items-center justify-center w-10 h-10"
              onClick={() => onSearch(location, totalGuests)}
              aria-label="Search"
            >
              <img src="/search.svg" alt="Buscar" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <GuestModal
    modalVisible={modalVisible}
    setModalVisible={setModalVisible}
    adults={adults}
    setAdults={setAdults}
    children={children}
    setChildren={setChildren}
  />
    </header>
  );
}
