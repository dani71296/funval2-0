// src/components/MemberCard.jsx
import React from 'react';

export default function MemberCard({ name, image, className }) {
  return (
    <div className={`text-center ${className}`}>
      <img
        src={image}
        alt={name}
        className=" mx-auto  object-cover"
      />
      <p className="mt-2 font-medium">{name}</p>
    </div>
  );
}
