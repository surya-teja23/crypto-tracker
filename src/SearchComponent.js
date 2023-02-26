import React from 'react'

export default function SearchComponent( { refresh , setFilteredCoins } ) {
  return (
    <div className='d-flex justify-content-center mt-3'>
      <div className='form-floating'>
        <input onChange={(e) => setFilteredCoins(e.target.value)} placeholder='Search' className='form-control pe-5 me-5' />
        <label className='text-dark'>Search for a coin</label>
      </div>
      <button className='btn' onClick={refresh}>
        <img src='./images/refresh.png' width='40px'/>
      </button>
    </div>
  )
}
