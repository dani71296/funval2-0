import React from 'react';

export default function GuestModal({
  modalVisible,
  setModalVisible,
  adults,
  setAdults,
  children,
  setChildren,
}) {
  if (!modalVisible) return null;

  // Funciones para aumentar/disminuir adultos y niños
  const increaseAdults = () => setAdults(adults + 1);
  const decreaseAdults = () => {
    if (adults > 0) setAdults(adults - 1);
  };
  const increaseChildren = () => setChildren(children + 1);
  const decreaseChildren = () => {
    if (children > 0) setChildren(children - 1);
  };

  // Total guests para mostrar en input modal guests
  const totalGuests = adults + children;

  return (
    <>
      {/* Overlay */}
      <div
        id="overlay"
        className="fixed top-0 left-0 w-full h-full bg-gray-950/20 z-40" /* para aplicar modal bg-gray950/20 claveeee */
        onClick={() => setModalVisible(false)}
      ></div>

      {/* Modal Desktop */}
      <div
        id="guest-panel"
        className="fixed top-0 left-0 w-full h-1/2 bg-white shadow-md z-50 flex flex-col items-center justify-start pt-16 gap-6"
      >
        <div className="flex gap-2 bg-white rounded-xl shadow border border-gray-300p-2 max-w-4xl w-full divide-x divide-gray-300">
          {/* Add Location input desktop */}
          <div className="px-4 py-1 relative">
            <input
              id="modal-location-input"
              type="text"
              className="w-full max-w-md px-4 outline-none"
              placeholder="Add location"
            />
          </div>

          {/* Guests input desktop */}
          <div className="px-4 py-1">
            <input
              id="modal-guests-input"
              type="text"
              placeholder="Guests"
              className="w-full outline-none text-sm"
              readOnly
              value={totalGuests > 0 ? `${totalGuests} guests` : ''}
            />
          </div>

          {/* Search Button desktop */}
          <div className="px-4 py-1 flex items-center justify-center flex-grow">
            <button
              id="search-btn-desktop"
              className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 flex items-center gap-2 text-base"
              onClick={() => setModalVisible(false)} // Aquí puedes agregar función para filtrar después
            >
              🔍 Search
            </button>
          </div>
        </div>

        {/* Contadores adultos y niños desktop */}
        <div className="flex flex-col items-center w-full max-w-md mx-auto my-2 space-y-4">
          {/* Adults */}
          <div className="w-60">
            <p className="font-semibold text-gray-700">Adults</p>
            <p className="text-sm text-gray-400">Ages 13 or above</p>
            <div className="flex items-center gap-4">
              <button
                id="decrease-adult"
                className="text-xl font-bold text-red-500"
                onClick={decreaseAdults}
              >
                -
              </button>
              <span id="count-adult" className="text-lg font-medium">
                {adults}
              </span>
              <button
                id="increase-adult"
                className="text-xl font-bold text-red-500"
                onClick={increaseAdults}
              >
                +
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="w-60">
            <p className="font-semibold text-gray-700">Children</p>
            <p className="text-sm text-gray-400">Ages 2–12</p>
            <div className="flex items-center gap-4">
              <button
                id="decrease-children"
                className="text-xl font-bold text-red-500"
                onClick={decreaseChildren}
              >
                -
              </button>
              <span id="count-children" className="text-lg font-medium">
                {children}
              </span>
              <button
                id="increase-children"
                className="text-xl font-bold text-red-500"
                onClick={increaseChildren}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Móvil */}
      <div
        id="guest-panel-mobile"
        className="md:hidden fixed top-0 left-0 w-full h-[70vh] bg-white shadow-md z-50 px-4 py-6 flex flex-col gap-4"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Edit your search</p>
          <button
            id="close-mobile-panel"
            className="text-xl font-bold"
            onClick={() => setModalVisible(false)}
          >
            ✕
          </button>
          <div></div> {/* para balancear flex */}
        </div>

        {/* Add Location móvil */}
        <div>
          <input
            id="modal-mobil-input"
            type="text"
            className="w-full border rounded-2xl p-2"
            placeholder="Add location"
          />
        </div>

        {/* Guests input móvil */}
        <div>
          <input
            id="modal-guests-input-mobil"
            type="text"
            placeholder="Guests"
            className="w-full border rounded-2xl p-2"
            readOnly
            value={totalGuests > 0 ? `${totalGuests} guests` : ''}
          />
        </div>

        {/* Adults controls móvil */}
        <div>
          <p className="font-semibold">Adults</p>
          <p className="text-sm text-gray-500 mb-2">Ages 13 or above</p>
          <div className="flex items-center gap-4">
            <button
              id="decrease-adult-mobile"
              className="text-xl font-bold text-red-500"
              onClick={decreaseAdults}
            >
              -
            </button>
            <span id="count-adult-mobile">{adults}</span>
            <button
              id="increase-adult-mobile"
              className="text-xl font-bold text-red-500"
              onClick={increaseAdults}
            >
              +
            </button>
          </div>
        </div>

        {/* Children controls móvil */}
        <div>
          <p className="font-semibold">Children</p>
          <p className="text-sm text-gray-500 mb-2">Ages 2–12</p>
          <div className="flex items-center gap-4">
            <button
              id="decrease-children-mobile"
              className="text-xl font-bold text-red-500"
              onClick={decreaseChildren}
            >
              -
            </button>
            <span id="count-children-mobile">{children}</span>
            <button
              id="increase-children-mobile"
              className="text-xl font-bold text-red-500"
              onClick={increaseChildren}
            >
              +
            </button>
          </div>
        </div>

        {/* Botón Search móvil */}
        <div className="mt-auto flex justify-center">
          <button
            id="search-btn-mobile"
            className="bg-red-500 text-white px-6 py-3 rounded-2xl hover:bg-red-600 flex items-center gap-2"
            onClick={() => setModalVisible(false)} // Aquí igual puedes poner función para filtrar
          >
            🔍 Search
          </button>
        </div>
      </div>
    </>
  );
}

