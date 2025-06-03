'use client';

import { useState } from 'react';
import Image from 'next/image';

const resultData = [
  { id: 1, src: '/results1.png', href: '#' },
  { id: 2, src: '/results2.png', href: '#' },
  { id: 3, src: '/results3.png', href: '#' },
  { id: 4, src: '/results4.png', href: '#' },
  { id: 5, src: '/results5.png', href: '#' },
  { id: 6, src: '/results6.png', href: '#' },
];
//My name is Vishn h
export default function Results() {
  const [selectedId, setSelectedId] = useState(1);

  const getImageById = (id) => resultData.find((img) => img.id === id);

  // smallerIds now includes all except selectedId (including image 1)
  const smallerIds = resultData
    .map((img) => img.id)
    .filter((id) => id !== selectedId);

  return (
    <section className="min-h-screen bg-black font-castleton px-6 py-24 text-white max-w-[1400px] mx-auto">
      <h1 className="text-5xl font-bold text-center mb-12">Project Results</h1>

      {/* Top Grid: 3 cols x 2 rows with smaller height */}
      <div
        className="grid grid-cols-3 grid-rows-2 gap-6"
        style={{ height: '50vh' }} // reduced height more
      >
        {/* Big image - spans 2 cols and 2 rows */}
        <div
          className="relative rounded-2xl overflow-hidden border border-gray-700 cursor-default transition-all duration-700 ease-in-out"
          style={{
            gridColumn: 'span 2',
            gridRow: 'span 2',
            transformOrigin: 'center center',
          }}
        >
          <Image
            src={getImageById(selectedId).src}
            alt={`Result ${selectedId}`}
            fill
            className="object-contain transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Small images on right (2 slots) */}
        {[...smallerIds]
          // filter only those IDs that can fit here — no filtering to exclude image 1!
          .filter((id) => [1, 2, 3, 4, 5, 6].includes(id))
          .slice(0, 2)
          .map((id, index) => (
            <div
              key={id}
              onClick={() => setSelectedId(id)}
              className="relative rounded-xl overflow-hidden border border-gray-700 cursor-pointer transition-all duration-700 ease-in-out hover:scale-105"
              style={{
                gridColumn: '3',
                gridRow: index + 1,
                transformOrigin: 'center center',
              }}
            >
              <Image
                src={getImageById(id).src}
                alt={`Result ${id}`}
                fill
                className="object-contain transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
      </div>

      {/* Bottom section: 3 images side by side with height matching top stacked images */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {[...smallerIds]
          .filter((id) => [1, 2, 3, 4, 5, 6].includes(id))
          .slice(2) // remaining images after first 2 on right top
          .map((id) => (
            <div
              key={id}
              onClick={() => setSelectedId(id)}
              className="relative rounded-xl overflow-hidden border border-gray-700 cursor-pointer transition-all duration-700 ease-in-out hover:scale-105"
              style={{ height: '25vh', transformOrigin: 'center center' }}
            >
              <Image
                src={getImageById(id).src}
                alt={`Result ${id}`}
                fill
                className="object-contain transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
