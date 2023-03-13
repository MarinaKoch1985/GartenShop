import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'



export default function ProductSaleCard({id, title, image, price, discont_price}) {
    
  const discount = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();
  const add_to_cart = () => dispatch(addToCart({id, title, price, image, discont_price}))
  
  return (
    <div className={s.product_card}>
      <div>
      <Link to={`/products/${id}`} >
        <img src={`http://localhost:3333${image}`} alt={title} />
        </Link>
        <button onClick={add_to_cart}>В корзину </button>
        </div>
        <div className={s.price_block}>
        <p>{discont_price}€</p>
        <p>Старая цена: {price}€</p>
        <p>{discount}%</p>
        </div>
        <Link to={`/products/${id}`}>
        <p className={s.title}>{title}</p>
        </Link>


    </div>
  )
}
