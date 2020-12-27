import twan from "../assets/twan_transparent.png"

export default function About() {
  return (
    <section className="sticky top-20 self-start hidden md:block" style={{ maxWidth: "180px", marginTop: "75px" }}>
      <div className=" overflow-hidden rounded-sm mb-8" style={{ backgroundColor: "#fec150" }}>
        <img src={twan} width="180px" height="180px" alt="headshot of Twan Mulder" />
      </div>
      <p className="mb-1 uppercase text-sm tracking-wide text-gray-500">About</p>
      <h2 className="mb-1 font-bold">Twan Mulder</h2>
      <p className="text-sm text-gray-500">Developer & CRO Specialist who loves writing and creating enticing experiences | Employed at Storm Digital, part of Accenture Interactive</p>
    </section>
  )
}
