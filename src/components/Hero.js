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
    <header className="text-white border-white fixed top-0 left-0 right-0 h-screen pt-8 pb-24 -z-1 md:pb-32 bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
      <div className="flex flex-col h-full container" style={{ opacity: textOpacity, transform: `translate3d(0, -${textTransform}px, 0)`, willChange: "opacity, transform" }}>
        <article className="flex flex-col items-start justify-center h-full ">
          <h1 className="transform-gpu translate-y-full opacity-0 fade-up-partial mb-4 tracking-wider uppercase text-md md:text-xl lg:text-2xl">Hey, my name is Twan!</h1>
          <h2 className="transform-gpu translate-y-20 opacity-0 fade-up font-bold mb-4 md:mb-8 text-2xl md:text-3xl lg:text-6xl">
            Front-end Developer focused on React <span className="opacity-30">who loves writing and creating enticing experiences</span>
          </h2>

          <div className="transform-gpu translate-y-full opacity-0 fade-up-2 flex items-center gap-4">
            <a className="transition-opacity hover:opacity-50" href="https://github.com/twanmulder" rel="noopener noreferrer" target="_blank">
              <GitHub size={32} />
              <span className="sr-only">Go to GitHub profile</span>
            </a>
            <a className="transition-opacity hover:opacity-50" href="https://twitter.com/toktoktwan" rel="noopener noreferrer" target="_blank">
              <Twitter size={32} />
              <span className="sr-only">Go to Twitter profile</span>
            </a>
            <p>twan.mulder[at]gmail.com</p>
          </div>
        </article>
        <span className="text-sm opacity-0 animate-fade-in">
          <span className="inline-block animate-bounce">↓</span> scroll
        </span>
      </div>
    </header>
  )
}
