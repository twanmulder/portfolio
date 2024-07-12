import { Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2024() {
  return (
    <>
      <DateEntry title="2024" />
      <TimelineEntry title="Started as Frontend Developer at DHL!" timestamp="May 1st, 2024" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>As Frontend Developer at DHL eCommerce, I'm part of multiple teams that work on a broad range of both internal and external facing tools and websites.</p>
          <p>This work spans from creating an entirely new user interface from the ground up for the Customs team, to migrating the API implementation from custom functions to React Query for the Location team, and many more tasks ranging a broad spectrum of technical capabilities.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.dhl.com/nl-nl/home/ecommerce.html" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
