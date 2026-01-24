import Hero from "./components/widgets/hero/hero"
import Section1 from "./components/widgets/section1/section1"
import Section2 from "./components/widgets/section2/section2"
import Section3 from "./components/widgets/section3/section3"
import Section4 from "./components/widgets/section4/section4"
import Footer from "./components/layout/footer"
// import section

const App = () => {
  return (
    <>
    <Hero />
    <Section1/>
    <Section2 btn="Learn More" img="/sec2.png" titleColor="#933c24"/>
    <Section3/>
    <Section2 btn="Read More" img="/about.png" titleColor="white"/>
    <Section4/>
    <Footer/>

  
    </>
  )
}

export default App