import React from 'react';
import RandomImageDisplay from './random';

import fantomlogo from './sponsorships/fantomlogo.png';
import journey8 from './journey8.png';
import journey11 from './journey11.png';

const images = [fantomlogo,journey8,journey11];

function RandomFunction() {
  return (
    <div className="App">
      <h1>Sponsored by:</h1>
      <RandomImageDisplay images={images} />
    </div>
  );
}

export default RandomFunction;
