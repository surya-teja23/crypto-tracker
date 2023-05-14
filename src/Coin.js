import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useValues from './Context/DataContext'
import Missing from './Missing'

export default function Coin() {
  const { coins } = useValues()
  const { id } = useParams()
  const coin = coins.find((coin) => coin.id === id);

  function formatter(num) {
    if (num < 0) return num.toFixed(2)
    else if (num < 999) return Math.sign(num) * Math.abs(num);
    else if (num < 999999)
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " K";
    else if (num < 999999999)
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + " M";
    else if (num < 999999999999)
      return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + " B";
    else if (num < 999999999999999)
      return Math.sign(num) * (Math.abs(num) / 1000000000000).toFixed(1) + " T";
  } 
  return (!!coin ?
    <div
      style={{ width: "350px" }}
      className="text-bg-dark rounded-5 p-4 text-center"
    >
      <div className="mb-3 text-info display-2">{coin.name}</div>
      <div>
        <img width="100px" src={coin.image} alt="" />
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">Current Price :</span>
          <span>₹ {coin.current_price}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">24hr Change :</span>
          <span className={coin.price_change_24h > 0 ? `text-success` : `text-danger`}>₹ {formatter(coin.price_change_24h)}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">24hr price % :</span>
          <span className={coin.price_change_percentage_24h > 0 ? `text-success` : `text-danger`}>{coin.price_change_percentage_24h.toFixed(2)} %</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">Market Cap :</span>
          <span>₹ {formatter(coin.market_cap)}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">Market Cap Rank :</span>
          <span>{coin.market_cap_rank}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">24hr High :</span>
          <span className="text-success">₹ {coin.high_24h}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center px-3">
          <span className="fs-5 fw-bold">24hr Low :</span>
          <span className="text-danger">₹ {coin.low_24h}</span>
        </div>
        <Link to="/" className="btn btn-primary my-3">
          Go back
        </Link>
      </div>
    </div> :

    <Missing />
  );
}
