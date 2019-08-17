import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState(null);
  const [name, setName] = useState(null);

  const onSearch = (event, query) => {
    event.preventDefault();
    setName(query.name);
  };

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisodeData = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/episode/",
        name && {
          params: {
            name: name
          }
        }
      );
    };

    getEpisodeData()
      .then(res => {
        setEpisodeData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [name]);

  if (!episodeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchForm className="search" onSearch={onSearch} />
      <section className="episode-list grid-view">
        {episodeData.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </section>
    </>
  );
}
