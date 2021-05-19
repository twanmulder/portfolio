import Hero from "../components/Hero"
import About from "../components/About"
import Timeline from "../components/Timeline/Timeline.js"
import Clients from "../components/Clients"
import CurrentlyListening from "../components/CurrentlyListening"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Hero />
      <main className="pb-20 bg-white mt-screen">
        <div className="container">
          <p></p>
          <p></p>
          <button></button>
        </div>
        <div className="container flex">
          <About />
          <Timeline />
        </div>
        <Clients />
        <CurrentlyListening />
      </main>
      <Footer />
    </>
  )
}

export default Home
