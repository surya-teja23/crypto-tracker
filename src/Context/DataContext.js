import React , { useState , createContext , useContext, useEffect } from 'react'

export default function useValues() {
  return useContext(dataProvider)
}

const dataProvider = createContext()

export function DataContext( { children } ) {
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [filteredCoins, setFilteredCoins] = useState("")

  function refresh () {
    setIsLoading(true)
    setError(false)
    console.log('clicked')
    async function fetchData() {
      try {
        let response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false"
        );
        if (!response.ok) throw Error;

        let data = await response.json();
        setCoins(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(fetchData , 2000)
  }

  useEffect( () => {
    refresh()
  } , [])

  return <dataProvider.Provider
    value={{
      coins,
      setCoins,
      isLoading,
      error,
      filteredCoins,
      setFilteredCoins,
      refresh
    }}
  >
    { children }
  </dataProvider.Provider>
}