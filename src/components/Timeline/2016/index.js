import { Book } from "react-feather"
import { DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2016() {
  return (
    <>
      <DateEntry title="2016" />
      <TimelineEntry title="Started University" timestamp="September 1, 2016" Icon={Book} tint="blue">
        <Notes>
          <p>Started studying Communication & Multi-media Design at the Hanze University of Applied Sciences.</p>
        </Notes>
      </TimelineEntry>
    </>
  )
}
