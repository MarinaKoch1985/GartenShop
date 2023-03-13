import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { sortProducts, searchPrice } from '../../store/reducers/products'
import s from './index.module.css'

export default function SortProducts() {

    const dispatch = useDispatch();

    const { id } = useParams();
    const categories = useSelector((state) => state.categories);
    const products = useSelector((state) => state.products);

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(Infinity);

    const sort_products = event => {
    dispatch(sortProducts(event.target.value));
};

    

    // const search_products = event => {
    //     event.preventDefault();
    //     const { min, max } = event.target;
    //     const min_value = min.value || 0;
    //     const max_value = max.value || Infinity;
    //     dispatch(searchProductsPrice({ min_value, max_value}))
    // }

    const search_products = event => {
        event.preventDefault();
        dispatch(searchPrice({ min, max}));
    };

    const changeMin = event => {
        setMin(event.target.value);
        dispatch(searchPrice({min: event.target.value, max}));
    };

    const changeMax = event => {
        setMax(event.target.value);
        dispatch(searchPrice({min, max: event.target.value}));
    };

    
  return (
    <div className={s.sort}>
        <div className={[s.sort, s.price_sort].join(' ')}>
        <form onSubmit={search_products}>
            <span>Цена </span>
                <input type="number" name="min" placeholder='от' onInput={changeMin}/>
                <input type="number" name="max" placeholder='до' onInput={changeMax}/>
            </form>
        </div>

        <div className={[s.sort, s.sale_price_sort].join(' ')}>
            <span>Товары со скидкой</span>
            <input type="text" />
        </div>

        <div className={[s.sort, s.sort_by].join(' ')}>
          <span>Сортировать:</span>
          <select onInput={sort_products}>
            <option value="default">по умолчанию</option>
            <option value="title"> по названию</option>
            <option value="price">по цене</option>
          </select>
        </div>

    </div>
    
  )
}
