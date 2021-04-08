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
        <div key={word} className="inline-block overflow-hidden">
          <span className={`transform-gpu translate-y-full slide-up-${delay} inline-block`} key={word}>
            {word}&nbsp;
          </span>
        </div>
      )
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 py-8 bg-gray-900 -z-1 h-9/10-screen md:h-screen">
      <div className="container flex flex-col h-full" style={{ opacity: textOpacity, transform: `translate3d(0, -${textTransform}px, 0)`, willChange: "opacity, transform" }}>
        <article className="flex flex-col items-start justify-center h-full">
          <h1 className="mb-4 text-lg leading-6 tracking-wider text-gray-400 uppercase">Twan Mulder</h1>
          <h2 className="text-2xl font-bold text-white md:text-3xl">{wrapWordsInSpans("Developer & Product Specialist from Groningen, NL", 1)}</h2>
          <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
            {wrapWordsInSpans("Currently @", 2)}
            <a offset="300" className="transition-colors hover:text-blue-600" href="https://www.stormdigital.nl/" target="_blank" rel="noreferrer">
              {wrapWordsInSpans("Framer", 2)}
            </a>
          </h2>
          <div className="flex flex-col sm:flex-row">
            <a className="px-8 py-2 text-sm text-center text-white transition-colors bg-blue-600 border border-blue-600 rounded-full opacity-0 animate-fade-in hover:border-blue-700 hover:bg-blue-700 " href="#about">
              more about me
            </a>
            <a className="px-8 py-2 mt-4 text-sm text-center text-white transition-colors border rounded-full opacity-0 sm:ml-4 sm:mt-0 animate-fade-in hover:border-gray-300 hover:text-gray-300" href="#socials">
              find me on socials
            </a>
          </div>
        </article>
        <span className="text-sm text-white opacity-0 animate-fade-in">
          <span className="inline-block animate-bounce">↓</span> scroll
        </span>
      </div>
    </header>
  )
}
