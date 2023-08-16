import React, { useState, useEffect } from 'react';

const RandomImageDisplay = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Generate a random index to select a new image
    const newIndex = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(newIndex);
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="Random Image" />
    </div>
  );
};

export default RandomImageDisplay;
