import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyOurProducts from './Components/WhyOurProducts/WhyOurProducts'
import BestSellingProducts from './Components/BestSellingProducts/BestSellingProducts'
import ProductBanner from './Components/ProductBanner/ProductBanner'

const App = () => {
  return (
    <>
    <div className="min-h-screen ">
    <Navbar/>
    <Hero/>
    <WhyOurProducts/>
    <BestSellingProducts/>
    <ProductBanner/>
    </div>
    </>
  )
}

export default App