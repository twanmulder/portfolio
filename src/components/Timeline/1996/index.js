import { Gift } from "react-feather"
import { DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year1996() {
  return (
    <>
      <DateEntry title="1996" />
      <TimelineEntry title="Birthday!" timestamp="December 7, 1996" Icon={Gift} tint="yellow">
        <Notes>
          <p>🥳 I was born on the 7th of December 1996!</p>
        </Notes>
      </TimelineEntry>
    </>
  )
}
