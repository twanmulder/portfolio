import { Helmet } from "react-helmet"

import Hero from "../components/Hero"
import About from "../components/About"
import Timeline from "../components/Timeline/Timeline.js"
import Clients from "../components/Clients"
import CurrentlyListening from "../components/CurrentlyListening"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Twan Mulder" />
        <meta property="og:description" content="Developer, Product Specialist Specialist, UI/UX enthousiast, occasionally writes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.twanmulder.com/meta-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toktoktwan" />
        <meta name="twitter:creator" content="Twan Mulder" />
        <meta name="twitter:title" content="Twan Mulder" />
        <meta name="twitter:description" content="Developer, Product Specialist, UI/UX enthousiast, occasionally writes." />
        <meta name="twitter:image" content="https://www.twanmulder.com/social-image.png" />
      </Helmet>
      <Hero />
      <main className="pb-20 bg-white main">
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
