import React from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import "./marketplace.css"
import CreateListing from './createlisting';
import Trading from './trading';

export default function Market() {
  const { contract } = useContract("0x0d6e7D59a2aA9fd9F0b5612eE6d5F2C324369cE9");
  const { data, isLoading } = useContractRead(contract, "getAllListings", [0,100]);

  // Render loading state
  if (isLoading) {
    return <div className='listings'>Loading...</div>;
  }

  // Render error state if data retrieval fails
  if (!data) {
    return <div className='listings'>Error retrieving listings.</div>;
  }

  // Render the listings
  return (
    <>
    <div className='listings'>
      <h1>Listings</h1>
      {data.map((listing, index) => (
        <div key={index}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          {/* Render additional details or components based on the listing */}
        </div>
      ))}
    </div>
    <CreateListing />
    <Trading />
    </>
  );
}
