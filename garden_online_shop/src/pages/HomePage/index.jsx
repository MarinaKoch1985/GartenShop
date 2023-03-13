import React from 'react'
import CategoriesSection from '../../components/CategoriesSection'
import DiscountCoupon from '../../components/DiscountCoupon'
import SalesBanner from '../../components/SalesBanner'
import ProductsSection from '../../components/ProductsSection'
import { load_categories } from '../../requests/categories_req'


export default function HomePage() {

  load_categories();

  return (
    <div>
        <SalesBanner />
        <CategoriesSection />
        <DiscountCoupon />
        <ProductsSection />
    </div>
  )
}