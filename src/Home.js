import React from 'react'
import SearchComponent from './SearchComponent';
import ListCoins from './ListCoins';

export default function Home() {
  return (
    <div className='bg-dark py-4 rounded-5 text-center'
      style={{
        width: 'min(80vw , 1400px)'
      }}
    >
      <div className='text-white text-decoration-underline fs-1 mt-3'>Welcome to Crypto Tracker</div>
      <SearchComponent />
      <ListCoins />
    </div>
  );
}
