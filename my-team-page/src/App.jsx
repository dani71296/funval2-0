import React from 'react'
import Header from './components/Header';
import Team from './components/Team';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Header />
      <Team />
    </div>
  );
}
