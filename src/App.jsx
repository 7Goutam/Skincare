import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import WhyOurProducts from './Components/WhyOurProducts/WhyOurProducts'
import BestSellingProducts from './Components/BestSellingProducts/BestSellingProducts'
import ProductBanner from './Components/ProductBanner/ProductBanner'
import SelectedProduct from './Components/SelectedProduct/SelectedProduct'
import FAQSection from './Components/FAQSection/FAQSection'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className="min-h-screen ">
    <Navbar/>
    <Hero/>
    <WhyOurProducts/>
    <BestSellingProducts/>
    <ProductBanner/>
    <SelectedProduct/>
    <FAQSection/>
    <Footer/>
    </div>
    </>
  )
}

export default App