import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


//store in usestate
//pass into tours component

function App() {

const [tour, settour] = useState([]);
const [loading, setloading] = useState(true);
//fetch the data from api useeffect
function removeTour(id){
  const newTour = tour.filter((t) => t.id !== id)
  settour(newTour)
}

const fetchTours = async () => {
  setloading(true)
  try {
    const response = await fetch(url)
    const tours = await response.json()
    setloading(false)
    settour(tours)
  } catch (error) {
    setloading(false)
    console.log(error)
  }
}


useEffect(() => {
  fetchTours();
}, []);

  if (loading) {
    return(<main>
       <Loading />;
    </main>)
  }

  if(tour.length === 0){
    return(
      <main className='title'>
        <h2>
          No Tours Left
        </h2>
        <button className='btn' onClick={()=> fetchTours()}>Refresh</button>
      </main>

    )
  }
  return (<main>
            <Tours tours = {tour} removeTour = {removeTour}/>
          </main>)
}

export default App
