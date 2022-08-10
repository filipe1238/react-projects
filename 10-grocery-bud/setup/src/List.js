import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ productList, setProductList, deleteItem, edit }) => {


  return <>
    <div className=' grocery-container'>
      <div className='grocery-list'>
        {productList.map((product, index) => {
          return <article key={index} className='grocery-item'>
            <p className='title'>{product}</p>
            <div className='btn-container'>
              <button className='edit-btn'
                onClick={() => {
                  edit(index)
                }}><FaEdit /></button>
              <button className='delete-btn'
                onClick={() => {
                  deleteItem(index)
                }}>
                <FaTrash />
              </button>
            </div>
          </article>
        })}
        <button
          className='clear-btn'
          onClick={() => {
            setProductList([]);
            localStorage.setItem("productLists", JSON.stringify([]))
          }}>Clear all</button>
      </div>
    </div>
  </>
}

export default List
