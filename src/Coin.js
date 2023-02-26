import React from 'react'
import { useParams , Link } from 'react-router-dom'
import './app.css'

export default function Coin( { coins } ) {
  const { id } = useParams()
  const coin = coins.find(coin => coin.id == id)
  const { name , image , symbol , current_price , market_cap , total_volume , high_24h , low_24h } = coin
  return (

      <div className='container text-white coin'>
        <div className='row justify-content-center'>
          <div className='col px-5 rounded rounded-5'>
            <p className='display-1 fw-bold text-uppercase text-info mt-3'>{name}</p>
            <img className='d-block m-auto mb-3' src={image} alt={`${name} image`} />
            <table className='table text-white w-auto'>
              <tr>
                <td className='fw-bold'>Symbol : </td>
                <td>{symbol}</td>
              </tr>
              <tr>
                <td className='fw-bold'>Current Price : </td>
                <td>₹ {current_price.toLocaleString()}</td>
              </tr>
              <tr>
                <td className='fw-bold'>Market Cap : </td>
                <td>₹ {market_cap.toLocaleString()}</td>
              </tr>
              <tr>
                <td className='fw-bold'>Total Volume : </td>
                <td>₹ {total_volume.toLocaleString()}</td>
              </tr>
              <tr>
                <td className='fw-bold'>24hr High : </td>
                <td className='text-success'>₹ {high_24h.toLocaleString()}</td>
              </tr>
              <tr>
                <td className='fw-bold'>24hr Low : </td>
                <td className='text-danger'>₹ {low_24h.toLocaleString()}</td>
              </tr>
              
            </table>

            <button className='btn btn-primary d-block m-auto mb-4'><Link to='/'>GO BACK</Link></button>
          </div>
        </div>
      </div>
  )
}
