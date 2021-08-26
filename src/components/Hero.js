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

  const wrapWordsInSpans = (text, delay, addUnderline) => {
    const words = text.split(" ")

    return words.map((word, index) => {
      return (
        <div key={word} className="inline-block overflow-hidden">
          <span className={`transform-gpu translate-y-full slide-up-${delay} inline-block ${addUnderline && "underline"}`} key={word}>
            {word}
            {index < words.length - 1 && `\xa0`}
          </span>
        </div>
      )
    })
  }

  return (
    <header style={{ background: "linear-gradient(45deg, #0037ff, #0088ff)" }} className="gradient-mesh border-8 border-white fixed top-0 left-0 right-0 h-screen pt-8 pb-24 -z-1 md:pb-8">
      <div className="flex flex-col h-full px-8 md:px-48" style={{ opacity: textOpacity, transform: `translate3d(0, -${textTransform}px, 0)`, willChange: "opacity, transform" }}>
        <article className="flex flex-col items-start justify-center h-full">
          <h1 className="mb-4 tracking-wider text-white uppercase opacity-80 hero-subtitle">Hey, my name is Twan!</h1>
          <h2 className="font-bold text-white hero-title">{wrapWordsInSpans("I'm a Developer, Writer, and Creator", 1)}</h2>
          <div className="transform-gpu translate-y-full opacity-0 fade-up">
            <a href="#contact" style={{ color: "#004fff" }} className="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-xl font-bold text-center text-black transition bg-white rounded-lg md:w-auto hover:opacity-90 transform-gpu hover:-translate-y-1">Get in Contact</a>
          </div>
        </article>
        <span className="text-sm text-white opacity-0 animate-fade-in">
          <span className="inline-block animate-bounce">↓</span> scroll
        </span>
      </div>
    </header>
  )
}