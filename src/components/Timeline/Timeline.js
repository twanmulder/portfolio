import { Year1996 } from "./1996"
import { Year2016 } from "./2016"
import { Year2019 } from "./2019"
import { Year2020 } from "./2020"

export default function Timeline() {
  return (
    <section className="flex flex-col w-full max-w-xl mx-auto">
      <Year2020 />
      <Year2019 />
      <Year2016 />
      <Year1996 />
    </section>
  )
}
