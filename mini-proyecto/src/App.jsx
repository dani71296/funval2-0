import React, { useState } from 'react';
import Header from './assets/components/Header';
import Main from './assets/components/Main';

export default function App() {
  const [location, setLocation] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredStays, setFilteredStays] = useState(null); // null = sin filtro, [] = filtro vacío

  // Total guests para filtrar
  const totalGuests = adults + children;

  // Función para filtrar stays basada en location y totalGuests
  const onSearch = (locationSearch, guestsSearch) => {
    // Pasar la búsqueda al Main a través de estado global o callback
    setFilteredStays({ location: locationSearch, guests: guestsSearch });
    setModalVisible(false); // Cierra el modal después de buscar
  };

  return (
    <>
      <Header
        location={location}
        setLocation={setLocation}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSearch={onSearch}
      />
      <Main filter={filteredStays} />
    </>
  );
}

