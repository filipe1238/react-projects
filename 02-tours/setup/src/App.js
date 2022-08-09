import React, { useState, useEffect, createContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
export const DeleteContext = createContext()


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const getTours = async () => {
    setIsLoading(true)
    try {

      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)

    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  console.log(tours)

  return (
    <DeleteContext.Provider value={removeTour}>
      <main>

        <h1 className='title'>Tours to choose</h1>
        {isLoading && <Loading />}
        {!isLoading && <Tours tours={tours} />}
        {tours.length === 0 &&<button className='btn title' onClick={getTours}>Reload</button>}
      </main>
    </DeleteContext.Provider>
  );
}

export default App
