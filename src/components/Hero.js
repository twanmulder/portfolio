import { useState, useEffect } from "react"
import { GitHub, Twitter } from "react-feather"

export default function Hero() {
  const [textOpacity, setTextOpacity] = useState(1)
  const [textTransform, setTextTransform] = useState(0)

  const windowHeight = window.innerHeight

  const listener = () => {
    const scrollFromTop = document.body.getBoundingClientRect().top
    if (scrollFromTop > 0) {
      const percentage = (1 / (windowHeight * 0.6)) * (scrollFromTop - 0.4 * windowHeight)
      const transform = (windowHeight / 6 - (windowHeight / 6) * percentage).toFixed(3)

      setTextOpacity(percentage)
      setTextTransform(transform)
    } else {
      if (textOpacity !== 0) {
        setTextOpacity(0)
      }
      if (textTransform !== windowHeight) {
        setTextTransform(windowHeight)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return (
    <header style={{ background: "linear-gradient(45deg, #0037ff, #0088ff)" }} className="gradient-mesh header border-white fixed top-0 left-0 right-0 h-screen pt-8 pb-24 -z-1 md:pb-8">
      <div className="flex flex-col h-full container" style={{ opacity: textOpacity, transform: `translate3d(0, -${textTransform}px, 0)`, willChange: "opacity, transform" }}>
        <article className="flex flex-col items-start justify-center h-full">
          <h1 className="transform-gpu translate-y-full opacity-0 fade-up-partial mb-4 tracking-wider text-white uppercase hero-subtitle">Hey, my name is Twan!</h1>
          <h2 className="transform-gpu translate-y-20 opacity-0 fade-up font-bold text-white hero-title mb-4 md:mb-8">
            Front-end Developer focused on React <span className="opacity-50">who loves writing and creating enticing experiences</span>
          </h2>

          <div className="transform-gpu translate-y-full opacity-0 fade-up-2 flex items-center gap-4">
            <a className="text-white transition-opacity hover:opacity-50" href="https://github.com/twanmulder" rel="noopener noreferrer" target="_blank">
              <GitHub size={32} />
              <span className="sr-only">Go to GitHub profile</span>
            </a>
            <a className="text-white transition-opacity hover:opacity-50" href="https://twitter.com/toktoktwan" rel="noopener noreferrer" target="_blank">
              <Twitter size={32} />
              <span className="sr-only">Go to Twitter profile</span>
            </a>
            <p className="text-white">twan.mulder[at]gmail.com</p>
          </div>
        </article>
        <span className="text-sm text-white opacity-0 animate-fade-in">
          <span className="inline-block animate-bounce">↓</span> scroll
        </span>
      </div>
    </header>
  )
}
