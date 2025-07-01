// src/components/Team.jsx
import React from 'react';
import MemberCard from './MemberCard';

const teamMembers = [
  { id: 1, name: 'Bill Mahoney', image: '/images/photo1.png' },
  { id: 2, name: 'Saba Cabrebra', image: '/images/photo2.png' },
  { id: 3, name: 'Shae Le', image: '/images/photo3.png' },
  { id: 4, name: 'Skylah Lu', image: '/images/photo4.png' },
  { id: 5, name: 'Griff Richards', image: '/images/photo5.png' },
  { id: 6, name: 'Stan John', image: '/images/photo6.png' },
];

export default function Team() {
  return (
    <section className="grid grid-cols-2 gap-y-8 gap-x-10 px-4 sm:grid-cols-3 sm:gap-x-10 max-w-4xl mx-auto">
      {teamMembers.map((member, index) => {
        // Aplica margin top a la columna derecha (índices 1, 4)
        // En móvil 2 columnas: índice 1 y 3 son columna derecha
        // En desktop 3 columnas: índice 1 y 4 son columna derecha (fila 1 y 2)
        const isRightColumnMobile = index % 2 === 1; 
        const isRightColumnDesktop = index === 1 || index === 4;

        return (
          <MemberCard
            key={member.id}
            name={member.name}
            image={member.image}
            className={`
              ${isRightColumnMobile ? 'mt-12' : ''}
              sm:mt-0
              ${isRightColumnDesktop ? 'sm:mt-12' : ''}
            `}
          />
        );
      })}
    </section>
  );
}
