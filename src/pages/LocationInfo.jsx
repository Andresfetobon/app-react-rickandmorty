// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import LocationCard from '../components/Location/LocationCard';

const LocationInfo = () => {
  const baseUrl = 'https://rickandmortyapi.com/api';

  const [location, getSingleLocation] = useFetch(baseUrl);

  const { id } = useParams();

  useEffect(() => {
    getSingleLocation(`/location/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <LocationCard location={location}/>
    </div>
  );
};

export default LocationInfo;
