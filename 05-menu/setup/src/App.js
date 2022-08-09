import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {
  const [items, setItems] = useState(data)
  const allCategories = ['all', ...new Set(items.map((item) => item.category))]
  const [categories, setCategories] = useState(allCategories)


  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setItems(newItems)
  }

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline' />
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </section>
  </main>;
}

export default App;
