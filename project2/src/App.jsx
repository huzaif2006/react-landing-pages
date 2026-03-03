import Hero from "./components/widgets/Hero"
import AboutSection from "./components/widgets/About"
import HoneyBar from "./components/widgets/Honeybar"
import MeetTeam from "./components/widgets/Teamsec"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <main>
      <Hero/>

      <AboutSection 
        title="Straight From The Bee Hives."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="About us"
      />
      <HoneyBar/>
      <MeetTeam/>
      <Footer/>
      
    </main>
  )
}

export default App