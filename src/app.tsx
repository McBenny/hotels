import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import HotelCard from './components/hotel-card'
import { IHotelProps } from './components/hotel-card/interface'
import data from './assets/data.json'
import './app.scss'

export function App () {
  const hotels = data.results as IHotelProps[]
  const hotelsQty = hotels.length
  const [results, setResults] = useState(hotels)
  const sortingOptions = useMemo(() => [
    {
      label: 'Price low-high',
      value: 'priceLowHigh',
    },
    {
      label: 'Price high-low',
      value: 'priceHighLow',
    },
  ], [])
  const defaultSorting = sortingOptions[0]
  const [sortingOrder, setSortingOrder] = useState('')

  useEffect(() => {
    let newOrder: IHotelProps[]
    if (sortingOrder === sortingOptions[0].value) {
      newOrder = [...hotels].sort((a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount)
      setResults(newOrder)
    }
    if (sortingOrder === sortingOptions[1].value) {
      newOrder = [...hotels].sort((a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount)
      setResults(newOrder)
    }
  }, [sortingOrder, hotels, sortingOptions])

  return (
    <div className='App'>
      <Header title='Qantas hotels' />
      {hotelsQty === 0
        ? (
          <p className='tools__summary'>
            There are no hotels matching your search.
          </p>
          )
        : (
          <>
            <div className='tools'>
              <p className='tools__summary'>
                <strong>{hotelsQty}</strong> hotels in <strong>Sydney</strong>.
              </p>
              <p className='tools__sorting'>
                <label htmlFor='sorting' className='tools__label'>Sort by:</label>
                {' '}
                <select name='sorting' id='sorting' defaultValue={sortingOrder} onChange={(e) => setSortingOrder(e.currentTarget.value)}>
                  <option value=''>Select a sorting</option>
                  {sortingOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </p>
            </div>

            {results.map((hotel: IHotelProps, index) => <HotelCard key={index} {...hotel} />)}
          </>
          )}
    </div>
  )
}
