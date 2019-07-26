import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState(null);
  const [name, setName] = useState(null);

  const onSearch = (event, query) => {
    event.preventDefault();
    setName(query.name);
  };

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharData = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character/",
        name && {
          params: {
            name: name
          }
        }
      );
    };

    getCharData()
      .then(res => {
        setCharData(res.data.results);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [name]);

  if (!charData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchForm onSearch={onSearch} />
      <section className="character-list grid-view">
        {charData.map(char => {
          return <CharacterCard key={char.id} char={char} />;
        })}
      </section>
    </>
  );
}
