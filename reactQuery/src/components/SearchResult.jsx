import "./SearchResult.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ result }) => {
  const navigate = useNavigate();
  return (
    <div
      className="search-resultesult"
      onClick={() => {
                navigate('/AccessFeedback', { state: { id: result.id, name: result.name } });
            }}
    >
      {result.name}
    </div>
  );
}
