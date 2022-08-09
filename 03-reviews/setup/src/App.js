import React from 'react';
import Review from './Review';
import { DiAptana } from "react-icons/di";
function App() {
  return <main>
    <section className='container'>
      <div className='title'>
        <h2>ours reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  </main>;
}

export default App;
