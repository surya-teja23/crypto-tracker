import React, { useState } from 'react'
import SearchComponent from "./SearchComponent";
import ListCoins from './ListCoins';
import './app.css'

export default function Home( { coins , filteredCoins , setFilteredCoins , isLoading , fetchError , refresh } ) {
  const [windowWidth , setWindowWidth] = useState(window.innerWidth)
  window.addEventListener("resize", function () {setWindowWidth(windowWidth.innerWidth)});
  return (
    <div className={`container-fluid ${windowWidth < 576 ? 'w-100' : 'w-75'} text-center text-white home`}>
      <div className="row justify-content-center">
        <div className="col-12 h1 mt-5"><u>Welcome to the CryptoChecker</u></div>
        <div className="col-12 ">
          <SearchComponent refresh={refresh} setFilteredCoins={setFilteredCoins} />
        </div>
        <div className="col-12 px-0">
          <ListCoins windowWidth={windowWidth} coins={coins} filteredCoins={filteredCoins} isLoading={isLoading} fetchError={fetchError} />
        </div>
      </div>
    </div>
  )
}
