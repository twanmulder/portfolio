import framer from "../assets/clients/framer.svg"
import porsche from "../assets/clients/porsche.svg"
import accenture from "../assets/clients/accenture.svg"
import mastercard from "../assets/clients/mastercard.svg"
import volkswagen from "../assets/clients/volkswagen.svg"
import virginmedia from "../assets/clients/virginmedia.svg"

export default function Clients() {
  return (
    <section className="container pt-40 mx-auto">
      <div className="flex flex-col w-full text-left lg:text-center">
        <h1 className="text-2xl font-semibold text-blue-550 title-font">
          Some cool companies&nbsp;
          <br className="md:hidden" />
          I've worked with.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 my-16 text-center sm:md:grid-cols-3 md:grid-cols-3">
        <div className="flex items-center justify-center ">
          <img src={framer} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={accenture} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={porsche} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={virginmedia} alt="Todoist Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={mastercard} alt="logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={volkswagen} alt="logo" className="block object-contain h-16" />
        </div>
      </div>
    </section>
  )
}
