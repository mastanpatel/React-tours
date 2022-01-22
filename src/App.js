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
useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(
    (result) => {
      settour(result);
      setloading(false);
    }
  )
}, []);

  if (loading) {
    return <Loading />
  }
  return (<main>
            <Tours tours = {tour} />
          </main>)
}

export default App
