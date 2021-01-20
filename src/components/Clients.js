import virginmedia from "../assets/clients/virginmedia.svg"
import porsche from "../assets/clients/porsche.svg"
import mastercard from "../assets/clients/mastercard.svg"
import volkswagen from "../assets/clients/volkswagen.svg"

export default function Clients() {
  return (
    <section className="container mx-auto pt-40">
      <div className="flex flex-col w-full text-left lg:text-center">
        <h1 className="text-2xl font-semibold text-blue-500 title-font">
          Some cool clients&nbsp;
          <br className="md:hidden" />
          I've worked with.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 my-16 text-center md:grid-cols-4">
        <div className="flex items-center justify-center ">
          <img src={porsche} alt="logo" className="block object-contain h-16" />
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
