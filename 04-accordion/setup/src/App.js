import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)

  return (<main>
    <article className='container'>
      <h3>Questions</h3>
      <section className='info'>
      {
        questions.map((question) => {
          return (<SingleQuestion key={question.id} question={question} />)
        })
      }
      </section>
    </article>
  </main>
  )
}

export default App;
