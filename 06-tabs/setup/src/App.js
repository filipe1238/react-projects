import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState([])

  const getData = async () => {
    try {
      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();
      setData(data)
      setSelected(data[0])
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const manageClick = (jobOrder, e) => {
    const filtered = data.filter((job) => {
      return job.order === jobOrder
    });

    setSelected(filtered[0]);
    console.log(selected);
  }


  return <>

    {loading && <section className='section loading'><h1>Loading ... </h1></section>}
    {!loading &&
      <main>
        <section className='title'>
          <h1>Experience</h1>
          <div className='underline'></div>
        </section>

        <section className='jobs-center'>
          <div className='btn-container'>
            {data.map((job) => {
              return (
                <button
                  key={job.id}
                  className={job.id === selected.id ?
                    'job-btn active-btn ' :
                    'job-btn'}
                  onClick={(e) => manageClick(job.order, e)}>
                  {job.title}
                </button> 
              )
            })}
          </div>
          <div className='job-info '>
            <h3>{selected.company}'s</h3>
            <h4>{selected.title}</h4>
            <p className='job-date'>{selected.dates}</p>
            <p className='job-desc'>

              {selected.duties.map((duty, index) => {
                return <>
                  <FaAngleDoubleRight className='job-icon' />
                  {duty}
                </>
              })}
            </p>
          </div>
        </section>
      </main>

    }
  </>
}

export default App
