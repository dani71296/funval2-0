import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <img src="/logo-f7862584.svg" alt="logo de proyecto"/>
        </div>
        <div className="buscador">
            <div className="bg-white rounded-2xl shadow-md border border-gray-300 mt-4 flex items-center justify-between gap-2 p-1 md:absolute md:right-8 md:top-4 max-w-md mx-auto divide-x divide-gray-300 h-15">
                {/* contenedor de Add Location */}
                <div className="px-4 py-2 relative">
                    
                    <input  id="location-input"
                    type="text"
                    placeholder="Add location"
                    className="w-full outline-none"
                    />
                    <div id="sugerencias" className="bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-auto hidden absolute z-10"></div>
                </div>

                 {/* contenedor de guest  */}
                <div className="px-4 py-2">
                    
                    <input id="guests-input"
                    type="text"
                    placeholder="Add guests"
                    className="w-full outline-none"
                    readOnly
                    />
                </div>

                 {/* boton de busqueda */}
                <div className="px-4 py-2 flex items-center justify-center">
                    <button id="search-btn-main" className="bg-white p-2 rounded hover:bg-red-600 flex items-center justify-center w-10 h-10">
                        <img src="/search.svg" alt="Buscar" className="w-5 h-5" />
                    </button>
                </div>
            </div>
             {/* modal desktop de adultos y niños */}
                     
                    <div id="overlay" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 hidden"></div>
                    <div id="guest-panel" className="fixed top-0 left-0 w-full h-1/2 bg-white shadow-md z-50 flex flex-col items-center justify-start pt-16 gap-6 hidden ">
                        <div className="flex gap-2 bg-white rounded-xl shadow border border-gray-300 p-2 max-w-4xl w-full divide-x divide-gray-300">
                            {/* contenedor de Add Location */}
                            <div className="px-4 py-1 relative">
                                <input
                                    id="modal-location-input"
                                    type="text"
                                    className="w-full max-w-md px-4 outline-none"
                                    placeholder="Add location"
                                />
                            </div>
                             {/* contenedor de guest */}
                            <div className="px-4 py-1">
                                <input 
                                    id="modal-guests-input"
                                    type="text"
                                    placeholder="Guests"
                                    className="w-full outline-none text-sm"
                                    readOnly
                                />
                            </div>

                             {/* boton de busqueda */}
                            <div className="px-4 py-1 flex items-center justify-center flex-grow">
                                <button
                                    id="search-btn-desktop"
                                    className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-red-600 flex items-center gap-2 text-base"
                                >
                                    🔍 Search
                                </button>
                            </div>

                        </div>
                            {/* contadores de mas y menos */}
                        <div className="flex flex-col items-center w-full max-w-md mx-auto my-2 space-y-4">
                             {/* Adults */}
                             <div className="w-60">
                                <div className="">
                                    <p className="font-semibold text-gray-700">Adults</p>
                                    <p className="text-sm text-gray-400">Ages 13 or above</p>
                                    <div className="flex items-center gap-4">
                                    <button id="decrease-adult" className="text-xl font-bold text-red-500">-</button>
                                        <span id="count-adult" className="text-lg font-medium">0</span>
                                    <button id="increase-adult" className="text-xl font-bold text-red-500">+</button>
                                    </div>
                                </div>

                                {/*  Children */}
                                <div className="">
                                    <p className="font-semibold text-gray-700">Children</p>
                                    <p className="text-sm text-gray-400">Ages 2–12</p>
                                    <div className="flex items-center gap-4">
                                    <button id="decrease-children" className="text-xl font-bold text-red-500">-</button>
                                        <span id="count-children" className="text-lg font-medium">0</span>
                                    <button id="increase-children" className="text-xl font-bold text-red-500">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* modal para movil */}
                    
                    <div id="guest-panel-mobile" className="md:hidden fixed top-0 left-0 w-full h-[70vh] bg-white shadow-md z-50 px-4 py-6 flex flex-col gap-4 hidden">
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-lg">Edit your search</p>
                            <button id="close-mobile-panel" className="text-xl font-bold">✕</button>
                            <div></div>  {/* para balancear flex */}
                        </div>
                        {/* add location mobile */} 
                         {/* contenedor de Add Location */}
                        <div>
                            <label className="block mb-1 font-semibold"></label>
                            <input
                                id="modal-mobil-input"
                                type="text"
                                className="w-full border rounded-2xl p-2"
                                placeholder="Add location"
                            />
                        </div>
                                 {/* guest mobil */}
                        <div>
                            <label className="block mb-1 font-semibold"></label>
                            <input 
                                id="modal-guests-input-mobil"
                                type="text"
                                placeholder="Guests"
                                className="w-full border rounded-2xl p-2"
                                readOnly 
                            />
                        </div>

                            {/* Adults controls */} 
                        <div>
                            <p className="font-semibold">Adults</p>
                            <p className="text-sm text-gray-500 mb-2">Ages 13 or above</p>
                            <div className="flex items-center gap-4">
                                <button id="decrease-adult-mobile" className="text-xl font-bold text-red-500">-</button>
                                    <span id="count-adult-mobile">0</span>
                                <button id="increase-adult-mobile" className="text-xl font-bold text-red-500">+</button>
                            </div>
                        </div>

                            {/* Children controls */}
                            <div>
                            <p className="font-semibold">Children</p>
                            <p className="text-sm text-gray-500 mb-2">Ages 2–12</p>
                            <div className="flex items-center gap-4">
                                <button id="decrease-children-mobile" className="text-xl font-bold text-red-500">-</button>
                                <span id="count-children-mobile">0</span>
                                <button id="increase-children-mobile" className="text-xl font-bold text-red-500">+</button>
                            </div>
                            </div>

                           {/*  Botón Search */}
                            <div className="mt-auto flex justify-center">
                            <button id="search-btn-mobile" className="bg-red-500 text-white px-6 py-3 rounded-2xl hover:bg-red-600 flex items-center gap-2">
                                🔍 Search
                            </button>
                        </div>
                    
                    </div>
        </div>
    </header>
  )
}
