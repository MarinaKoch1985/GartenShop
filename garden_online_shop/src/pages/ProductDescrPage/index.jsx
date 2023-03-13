import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { load_product } from '../../requests/product_item_req'
import { addToCart } from '../../store/reducers/cart'
import s from './index.module.css'



export default function ProductDescrPage() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const product_item = useSelector(state => state.product_item);

  const add_to_cart = () => dispatch(addToCart({ id: +id, title, image, discont_price }))

  useEffect(() => {
    dispatch(load_product(id))
   }, [])
  

  const { title, description, price, image, discont_price } = product_item;
  const discont = Math.round(((price - discont_price) / price) * 100);

  return (
    <div className={s.descr}>
      <div>
        <p className={s.title}>{ title }</p>
        <img src={`http://localhost:3333/${image}`} alt="" />
      </div>

      <div className={s.price_descr}>
        <div className={s.price}>
          <p>{discont_price}€</p>
          <p>{price}€</p>
          <p>{discont}%</p>
          </div>

          <button onClick={add_to_cart}>В корзину</button>
          <p>{description}</p>
        </div>
      </div>
    
  )
}