import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState(null);
  const [name, setName] = useState(null);
  const [page, setPage] = useState(null);
  const [count, setCount] = useState(null);

  const onSearch = (event, query) => {
    event.preventDefault();
    setName(query.name);
  };

  const getCurrentPage = page => {
    setPage(page.activePage);
  };

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharData = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character/",
        name
          ? page
            ? {
                params: {
                  name: name,
                  page: page
                }
              }
            : {
                params: {
                  name: name
                }
              }
          : page && {
              params: {
                page: page
              }
            }
      );
    };

    getCharData()
      .then(res => {
        setCharData(res.data.results);
        setCount(res.data.info.pages);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [name, page]);

  if (!charData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SearchForm className="search" onSearch={onSearch} />
      <section className="character-list grid-view">
        {charData.map(char => {
          return <CharacterCard key={char.id} char={char} />;
        })}
      </section>
      <div className="pagination-container">
        {count && (
          <Pagination
            defaultActivePage={1}
            totalPages={count}
            onPageChange={(event, data) => getCurrentPage(data)}
          />
        )}
      </div>
    </>
  );
}
