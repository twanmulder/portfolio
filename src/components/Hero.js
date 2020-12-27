import { useState, useEffect } from "react"

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

  const wrapWordsInSpans = (text, delay) => {
    const words = text.split(" ")

    return words.map((word) => {
      return (
        <div key={word} className="overflow-hidden inline-block">
          <span className={`transform-gpu translate-y-full animate-slide-up-${delay} inline-block`} key={word}>
            {word}&nbsp;
          </span>
        </div>
      )
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 -z-1	bg-gray-900 h-screen py-8">
      <div className="container container h-full flex flex-col" style={{ opacity: textOpacity, transform: `translate3d(0, -${textTransform}px, 0)`, willChange: "opacity, transform" }}>
        <article className="h-full flex flex-col justify-center items-start">
          <h1 className="leading-6 text-gray-400 text-lg uppercase tracking-wider mb-4">Twan Mulder</h1>
          <h2 className="text-2xl md:text-3xl text-white font-bold">{wrapWordsInSpans("Developer & CRO Specialist from Groningen, NL", 1)}</h2>
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
            {wrapWordsInSpans("Currently @", 2)}
            <a offset="300" className="hover:text-blue-600 transition-colors" href="https://www.stormdigital.nl/" target="_blank" rel="noreferrer">
              {wrapWordsInSpans("Storm Digital, part of Accenture Interactive", 2)}
            </a>
          </h2>
          <div className="flex flex-col sm:flex-row">
            <a className="border border-blue-600 bg-blue-600 text-white text-center rounded-full py-2 px-8 text-sm opacity-0 animate-fade-in transition-colors hover:border-blue-700 hover:bg-blue-700 " href="#about">
              more about me
            </a>
            <a className="border rounded-full text-white text-center py-2 px-8 text-sm mt-4 sm:ml-4 sm:mt-0 opacity-0 animate-fade-in transition-colors hover:border-gray-300 hover:text-gray-300" href="#socials">
              find me on socials
            </a>
          </div>
        </article>
        <span className="text-white text-sm opacity-0 animate-fade-in">
          <span className="animate-bounce inline-block">↓</span> scroll
        </span>
      </div>
    </header>
  )
}
