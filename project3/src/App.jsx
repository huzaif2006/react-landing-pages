import Hero from "./components/widgets/Hero"
import TrendingProducts from "./components/widgets/Trending_products"
import ComboPack from "./components/widgets/Combopack"
import OurServices from "./components/widgets/Ourservices"
import DiscountBanner from "./components/widgets/Discountsec"
import Newsletter from "./components/widgets/Newsletter"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <main>
      <Hero/>
      <TrendingProducts/>
      <ComboPack/>
      <OurServices/>
      <DiscountBanner/>
      <Newsletter/>
      <Footer/>
      
      
    </main>
  )
}

export default App