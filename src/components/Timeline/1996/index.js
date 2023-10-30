import { Gift } from "react-feather"
import { DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year1996() {
  const dob = new Date("12/07/1996")
  const monthDiff = Date.now() - dob.getTime()
  const ageDate = new Date(monthDiff)
  const year = ageDate.getUTCFullYear()
  const ageInYears = Math.abs(year - 1970)

  return (
    <>
      <DateEntry title="1996" />
      <TimelineEntry title="Birthday!" timestamp="December 7, 1996" Icon={Gift} tint="yellow">
        <Notes>
          <p>I was born the 7th of December 1996, which makes me {ageInYears} years old! </p>
        </Notes>
      </TimelineEntry>
    </>
  )
}
