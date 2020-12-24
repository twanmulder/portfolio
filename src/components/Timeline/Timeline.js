import { Coffee } from "react-feather"
import { Year2020 } from "./2020"
import { TimelineEntry } from "./Entry"

export default function Timeline() {
  return (
    <section id="work" className="flex flex-col w-full max-w-2xl mx-auto">
      <Year2020 />
      <TimelineEntry title="Work in progress..." timestamp="More timeline entries coming soon" Icon={Coffee} divider={false} />
    </section>
  )
}
