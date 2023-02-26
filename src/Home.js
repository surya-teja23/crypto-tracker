import React, { useEffect } from 'react'
import SearchComponent from "./SearchComponent";
import ListCoins from './ListCoins';
import './app.css'

export default function Home( { coins , filteredCoins , setFilteredCoins , isLoading , fetchError , refresh } ) {

  return (
    <div className="container w-75 text-center text-white home">
      <div className="row justify-content-center">
        <div className="col-12 h1 mt-5"><u>Welcome to the CryptoChecker</u></div>
        <div className="col-12 ">
          <SearchComponent refresh={refresh} setFilteredCoins={setFilteredCoins} />
        </div>
        <div className="col-12 px-0">
          <ListCoins coins={coins} filteredCoins={filteredCoins} isLoading={isLoading} fetchError={fetchError} />
        </div>
      </div>
    </div>
  )
}
