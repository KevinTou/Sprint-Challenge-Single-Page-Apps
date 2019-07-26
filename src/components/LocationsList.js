import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState(null);
  const [name, setName] = useState(null);

  const onSearch = (event, query) => {
    event.preventDefault();
    setName(query.name);
  };

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocationData = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/location/",
        name && {
          params: {
            name: name
          }
        }
      );
    };

    getLocationData()
      .then(res => {
        setLocationData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [name]);

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchForm className="search" onSearch={onSearch} />
      <section className="location-list grid-view">
        {locationData.map(location => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </section>
    </>
  );
}
