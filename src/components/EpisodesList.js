import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisodeData = async () => {
      return await axios.get("https://rickandmortyapi.com/api/episode/");
    };

    getEpisodeData()
      .then(res => {
        setEpisodeData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="location-list grid-view">
      {episodeData.map(episode => {
        return <EpisodeCard key={episode.id} episode={episode} />;
      })}
    </section>
  );
}
