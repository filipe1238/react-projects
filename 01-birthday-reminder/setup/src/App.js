import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [getPeople, setPeople ]= useState(data)

  return <main>
    <section className='container'>
      <h3>Birthdays today</h3>
      <List people={getPeople} />
      <button onClick={() => { console.log('you cliked') }} >Clear</button>
    </section>
  </main>;
}

export default App;
