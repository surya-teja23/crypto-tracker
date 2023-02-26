import { Routes , Route } from 'react-router-dom'
import SharedLayout from './SharedLayout';
import Home from "./Home";
import Coin from './Coin';
import { useState , useEffect } from 'react';

function App() {
  const [coins , setCoins] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [fetchError , setFetchError] = useState('')
  const [filteredCoins , setFilteredCoins] = useState('')

  async function refresh() {
    setIsLoading(true)
    setFetchError(null)
    const fetchApi = async () => {
      try {
        let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        if (!response.ok) throw 'Failed to receive data'

        let data = await response.json()
        setCoins(data)
      }
      catch (err) { 
        setFetchError(err.message)
        console.log(err)
      } 
      finally {
        setIsLoading(false)
      }
    }

    setTimeout(fetchApi , 2000)
  }

  useEffect( () => {
    refresh()
  } , [])

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home coins={coins} filteredCoins={filteredCoins} setFilteredCoins={setFilteredCoins} isLoading={isLoading} fetchError={fetchError} refresh={refresh} />} />
        <Route path=':id' element={<Coin coins={coins} />} />
      </Route>
    </Routes>
  );
}

export default App;
