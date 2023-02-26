import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader';

export default function ListCoins( { windowWidth , coins , filteredCoins , isLoading , fetchError } ) {

  return (
    <>
      {isLoading && <Loader />}
      {fetchError && <p className='h3 mt-5 pt-5 text-danger'>{fetchError}</p>}
      {!isLoading && !fetchError && <table className={`table text-start text-bg-dark m-auto ${windowWidth<=768 ? "m-0" : ''}`}>
        <tbody>
          {coins.filter(coin => coin.name.toLowerCase().includes(filteredCoins.toLowerCase())).map( coin => {
            return <tr className='align-middle' key={coin.id}>
              <td><img src={coin.image} alt={`${coin.name} icon`} style={windowWidth < 576 ? {"width" : "40px"} : {"width" : "55px"}} /></td>
              <td style={windowWidth <= 769 ? {"paddingRight" : "0"} : {}}>{coin.name}</td>
              <td className={windowWidth <= 768 ? 'd-none' : ''}>{coin.symbol}</td>
              <td>{`₹${coin.current_price.toLocaleString()}`}</td>
              <td className={`${coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'} ${windowWidth <= 768 ? 'd-none' : ''}`}>{coin.price_change_percentage_24h.toFixed(2)}</td>
              <td className={windowWidth <= 800 ? 'd-none' : ''}>₹{coin.market_cap.toLocaleString()}</td>
              <td><Link className='btn btn-primary text-nowrap' to={`/${coin.id}`} >More info</Link></td>
            </tr>
          })}
        </tbody>
      </table>}
    </>
  )
}
