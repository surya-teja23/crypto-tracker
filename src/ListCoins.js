import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader';

export default function ListCoins( { coins , filteredCoins , isLoading , fetchError } ) {
  const [windowWidth , setWindowWidth] = useState(window.innerWidth)
  window.addEventListener("resize", function () {setWindowWidth(windowWidth.innerWidth)});

  return (
    <>
      {isLoading && <Loader />}
      {fetchError && <p className='h3 mt-5 pt-5 text-danger'>{fetchError}</p>}
      {!isLoading && !fetchError && <table className='table text-start text-bg-dark m-auto table-responsive-md'>
        <tbody>
          {coins.filter(coin => coin.name.toLowerCase().includes(filteredCoins.toLowerCase())).map( coin => {
            return <tr className='align-middle' key={coin.id}>
              <td><img src={coin.image} alt={`${coin.name} icon`} /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>{`₹${coin.current_price.toLocaleString()}`}</td>
              <td className={coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h.toFixed(2)}</td>
              <td className={windowWidth <= 768 && 'd-none'}>₹{coin.market_cap.toLocaleString()}</td>
              <td><Link className='btn btn-primary text-nowrap' to={`/${coin.id}`} >More info</Link></td>
            </tr>
          })}
        </tbody>
      </table>}
    </>
  )
}
