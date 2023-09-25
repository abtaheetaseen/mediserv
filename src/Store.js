import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { addToCart } from './features/cartSlice';

const Store = () => {

  

  const {items, isLoading, error} = useSelector(state => state.products);

  const [storeItem, setStoreItem] = useState(items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate('/cart');
  };

  const filterItem = (category) => {
    console.log('clicked')
    const updatedItems = items.filter((curElem) => {
      return curElem.category === category;
    });
    setStoreItem(updatedItems);
    console.log(updatedItems);
  }

  return (
    
   <>
      <div className="total-container-left">
          <button className='store-btn' onClick={() => setStoreItem(items)}>All</button><br />
          <button className='store-btn' onClick={() => filterItem('moisturizer')}>Moisturizer</button><br />
          <button className='store-btn' onClick={() => filterItem('medicine')}>Medicine</button><br />
          <button className='store-btn' onClick={() => filterItem('soap')}>Soap</button><br />
          <button className='store-btn' onClick={() => filterItem('facewash')}>Facewash</button><br />
      </div>

        <div className="total-container-right">
      {isLoading ? (<p>Loading...</p>) : error ? (<p>An error occured...</p>) : (<>
        <div className="products">
          {storeItem.map((item) => {
            return <article key={item.id} className='product-article'>
              <div className="product">

                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />
                            <p className='item-category'>*{item.category}</p>

                            <div>
                                <p className='desc'>{item.desc}</p>
                            </div>

                            <div>
                            <p className='price'>BDT {item.price}</p>
                            </div>

                            <button className='cuisine-button' onClick={() => handleAddToCart(item)}>Add To Cart</button>

                        </div>
            </article>
          })}
        </div>
      </>)} 
    </div>
    </>
  )
}

export default Store
