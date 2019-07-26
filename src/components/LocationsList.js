import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getLocationData = async () => {
      return await axios.get("https://rickandmortyapi.com/api/location/");
    };

    getLocationData()
      .then(res => {
        console.log(res.data.results);
        setLocationData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="location-list grid-view">
      {locationData.map(location => {
        return <LocationCard key={location.name} location={location} />;
      })}
    </section>
  );
}
