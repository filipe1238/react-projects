import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [product, setProduct] = useState(localStorage.getItem("product") || '');
  const [productList, setProductList] = useState(JSON.parse(localStorage.getItem("productLists")) || [])
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' })
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState('');

  const manageSubmit = (event) => {
    event.preventDefault()
    if (!product) {
      setAlert({ ...alert, show: true, type: 'danger', msg: `Value can't be empty` });
      const timeout = setTimeout(() => {
        disableAlert();
      }, 4000);
      return () => clearTimeout(timeout);
    }
    if (isEditing) {
      setProductList(
        productList.map((item, index) => {
          if (index === editID) {
            return product;
          }
          return item;
        })
      );
      setAlert({ ...alert, show: true, type: 'success', msg: 'Item updated ' });
      setEditing(false)
      setEditID('')
      setProduct('')
    } else {
      setProductList([...productList, product]);
      setAlert({ ...alert, show: true, type: 'success', msg: 'Added item' });
      setProduct('');
    }
  }
  const disableAlert = () => {
    setAlert({ ...alert, show: false })
  }
  useEffect(() => {
    localStorage.setItem("productLists", JSON.stringify(productList))
  }, [productList])

  const deleteItem = (index) => {
    setAlert({ ...alert, show: true, type: 'danger', msg: 'Deleted item' });
    let filteredProducts = productList.filter((product, prodIndex) => prodIndex !== index)
    setProductList(
      filteredProducts
    )
  }
  const edit = (index) => {
    setEditing(true)
    setEditID(index)

    let editProd = productList.filter((product, prodIndex) => prodIndex === index)
    setProduct(editProd)
  }

  return (
    <section className='section-center '>
      <form className='grocery-form ' onSubmit={(e) => { manageSubmit(e) }}>
        {<Alert {...alert} disableAlert={disableAlert} productList={productList} />}
        <h3 className='title'>Grocery bud</h3>
        <div className='form-control'>
          <input
            placeholder='Eg. Eggs, Apples'
            className='grocery'
            value={product}
            onChange={(e) => {
              setProduct(e.target.value)
              localStorage.setItem("product", e.target.value)
            }} />
          {isEditing
            ? <button type='submit' className='submit-btn'>Edit</button>
            : <button type='submit' className='submit-btn'>Submit</button>}
        </div>
      </form>
      <List
        productList={productList}
        setProductList={setProductList}
        deleteItem={deleteItem}
        edit={edit} />

    </section>
  );
}

export default App
