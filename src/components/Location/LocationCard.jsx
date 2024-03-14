/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const LocationCard = ({ location }) => {
  console.log(location);
  return (
      <article>
        <h2>{`#${location?.id} - ${location?.name}`}</h2>
      </article>
  );
};

export default LocationCard;
