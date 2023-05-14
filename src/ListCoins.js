import React from 'react'
import useValues from './Context/DataContext'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import { useWindowWidth } from './CustomHooks/useWindowWidth'

export default function ListCoins() {
  const { isLoading , error , coins , filteredCoins } = useValues()
  const windowWidth = useWindowWidth()

  function formatter (num) {
    if (num < 999) return (Math.sign(num) * Math.abs(num)).toFixed(2);
    else if (num < 999999) return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + " K";
    else if (num < 999999999) return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + " M";
    else if (num < 999999999999) return Math.sign(num) * (Math.abs(num) / 1000000000).toFixed(1) + " B";
    else if (num < 999999999999999) return Math.sign(num) * (Math.abs(num) / 1000000000000).toFixed(1) + " T";
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <div className="text-danger my-5 py-5 display-4">Failed to load data ... </div>}
      {!isLoading && !error && (
        <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th className="text-nowrap">24h %</th>
                {windowWidth > 1020 && <th>Market Cap</th>}
                <th>Link</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {coins
                .filter((coin) =>
                  coin.name.toLowerCase().includes(filteredCoins.toLowerCase())
                )
                .map((coin) => {
                  return (
                    <tr key={coin.id}>
                      <td data-label="logo">
                        <img src={coin.image} alt={coin.name} style={{ width: "40px" }} />
                      </td>
                      <td style={{ verticalAlign: "middle" }} data-label="name">{coin.name}</td>
                      <td style={{ verticalAlign: "middle" }} data-label="symbol">{coin.symbol}</td>
                      <td style={{ verticalAlign: "middle" }} data-label="price">₹ {coin.current_price.toLocaleString()}</td>
                      <td data-label="24h %" style={{
                          verticalAlign: "middle",
                          color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                        }}>
                        {formatter(coin.price_change_percentage_24h)} %
                      </td>
                      {(windowWidth > 1020 || windowWidth <= 849) && (
                        <td data-label="market cap">₹ {windowWidth <= 849 ? formatter(coin.market_cap) : coin.market_cap.toLocaleString()}</td>)}
                      <td data-label="link">
                        <Link className="btn btn-primary text-nowrap" to={`/${coin.id}`}>More info</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
