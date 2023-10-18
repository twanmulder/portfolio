import { Helmet } from "react-helmet"

import Hero from "../components/Hero"
import About from "../components/About"
import Timeline from "../components/Timeline/Timeline.js"
import Clients from "../components/Clients"
import CurrentlyListening from "../components/CurrentlyListening"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import Contact from "../components/Contact"

function Home() {
  const [borderRadius, setBorderRadius] = useState(178)
  const [margin, setMargin] = useState(8)

  const windowHeight = window.innerHeight

  const listener = () => {
    const scrollFromTop = document.body.getBoundingClientRect().top

    if (scrollFromTop > 0) {
      const percentage = (1 / (windowHeight * 0.6)) * (scrollFromTop - 0.4 * windowHeight)

      setBorderRadius(percentage * 200)
      setMargin(percentage * 8)
    } else {
      setBorderRadius(0)
      setMargin(0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

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
      <main style={{ borderRadius: `${borderRadius}px`, marginLeft: `${margin}rem`, marginRight: `${margin}rem` }} className="pb-20 bg-white main opacity-0 slide-up-main">
        <div className="container flex">
          <About />
          <Timeline />
        </div>
        <Clients />
        <Contact />
        <CurrentlyListening />
      </main>
      <Footer />
    </>
  )
}

export default Home
