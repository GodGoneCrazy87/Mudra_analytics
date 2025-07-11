'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const groupBaseIds = ['11', '21', '31', '41', '51'];

export default function Results() {
  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const last = localStorage.getItem('lastGroupIndex');
    const nextIndex = last ? (parseInt(last) + 1) % groupBaseIds.length : 0;
    setGroupIndex(nextIndex);
    localStorage.setItem('lastGroupIndex', nextIndex.toString());
  }, []);

  const baseId = groupBaseIds[groupIndex]; // '11', '21', etc.

  // Dynamically generate 6 result images per group
  const resultData = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/results${parseInt(baseId) + i}.png`,
    href: '#',
  }));

  const [selectedId, setSelectedId] = useState(1);

  const getImageById = (id) => resultData.find((img) => img.id === id);

  const smallerIds = resultData.map((img) => img.id).filter((id) => id !== selectedId);

  return (
    <section className="min-h-screen bg-black font-castleton px-4 md:px-6 py-24 text-white max-w-[1400px] mx-auto">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Project Results</h1>

  {/* Top Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6" style={{ height: 'auto' }}>
    {/* Big image */}
    <div
      className="relative rounded-2xl overflow-hidden border border-gray-700 cursor-default transition-all duration-700 ease-in-out md:col-span-2 md:row-span-2 h-[35vh] md:h-auto"
    >
      <Image
        src={getImageById(selectedId).src}
        alt={`Result ${selectedId}`}
        fill
        className="object-contain transition-transform duration-700 ease-in-out"
      />
    </div>

    {/* 2 right-top images (stacked vertically on mobile) */}
    {smallerIds.slice(0, 2).map((id) => (
      <div
        key={id}
        onClick={() => setSelectedId(id)}
        className="relative rounded-xl overflow-hidden border border-gray-700 cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 h-[25vh]"
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

  {/* Bottom 3 images */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {smallerIds.slice(2).map((id) => (
      <div
        key={id}
        onClick={() => setSelectedId(id)}
        className="relative rounded-xl overflow-hidden border border-gray-700 cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 h-[25vh]"
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

  {/* Common Results 8 and 7 */}
  <div className="space-y-6 mt-12">
    <div className="relative rounded-xl overflow-hidden border border-gray-700 h-[30vh]">
      <Image
        src="/results8.png"
        alt="Results 8"
        fill
        className="object-contain"
      />
    </div>

    <div className="relative rounded-xl overflow-hidden border border-gray-700 h-[30vh]">
      <Image
        src="/results7.png"
        alt="Results 7"
        fill
        className="object-contain"
      />
    </div>
  </div>
</section>

  );
}
