import React from 'react';
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult.jsx";

export const SearchResultsList = ({ results }) => {
  return (
      <div className="resultsList">
        {results.map((result, id) => (
            <SearchResult result={result} key={id}/>
        ))}
      </div>
  );
};
