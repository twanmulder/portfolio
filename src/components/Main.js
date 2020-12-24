import About from "./About"
import Timeline from "./Timeline/Timeline.js"

export default function Main() {
  return (
    <main className="bg-white py-20 mt-screen" style={{ height: "400vh" }}>
      <div className="container flex">
        <About />
        <Timeline />
      </div>
    </main>
  )
}
