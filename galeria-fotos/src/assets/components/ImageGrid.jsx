import React from "react";

export default function ImageGrid({ images }) {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src.medium}
            alt={img.photographer}
            className="rounded shadow w-full h-36 object-cover"
          />
        ))}
      </div>
    </div>
  );
}
