// import Intro from "./Intro"
import About from "./About"
import Timeline from "./Timeline/Timeline.js"
import Clients from "./Clients"
import CurrentlyListening from "./CurrentlyListening"

export default function Main() {
  return (
    <main className="pb-20 bg-white mt-screen" id="about">
      {/* <Intro /> */}
      <div className="container flex">
        <About />
        <Timeline />
      </div>
      <Clients />
      <CurrentlyListening />
    </main>
  )
}
