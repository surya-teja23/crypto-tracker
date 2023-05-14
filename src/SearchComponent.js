import React from "react";
import { HiRefresh } from "react-icons/hi";
import useValues from "./Context/DataContext";

export default function SearchComponent() {
  const { isLoading , error , refresh , setFilteredCoins } = useValues()
  return (
    <div className="my-4 d-flex align-items-center justify-content-center">
      <div className="form-floating">
        <input
          onMouseEnter={(e) => {
            e.target.style.cursor = isLoading || error ? "not-allowed" : "auto";
          }}
          onSelect={(e) => {
            (isLoading || error) && e.target.blur();
          }}
          onChange={(e) => setFilteredCoins(e.target.value)}
          style={{ width: "min(400px,50vw)" }}
          className="form-control"
          placeholder="seach"
        />
        <label>Search for a Coin</label>
      </div>
      <button
        className="btn text-primary"
        onClick={!isLoading ? refresh : () => false}
        onMouseEnter={(e) =>
          (e.target.style.cursor =
            isLoading ? "not-allowed" : "pointer")
        }>
        <HiRefresh className="display-1" />
      </button>
    </div>
  );
}
