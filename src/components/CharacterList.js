import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState(null);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharData = async () => {
      return await axios.get("https://rickandmortyapi.com/api/character/");
    };

    getCharData()
      .then(res => {
        setCharData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, []);

  if (!charData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="character-list grid-view">
      {charData.map(char => {
        return <CharacterCard key={char.name} char={char} />;
      })}
    </section>
  );
}
