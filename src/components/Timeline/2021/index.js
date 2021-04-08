import { Zap, Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2021() {
  return (
    <>
      <DateEntry title="2021" />
      <TimelineEntry title="Second job!" timestamp="April 5, 2021" Icon={Briefcase} tint="gray">
        <Notes>
          <p>Started working at Framer as a Product Specialist.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.framer.com/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <TimelineEntry title='Released "GitHub README Templates"' timestamp="Jan 6, 2021" Icon={Zap} tint="blue">
        <Notes>
          <p>Adding an amazing README to your GitHub project is a great way of introducing new people to the codebase. That's why I've gathered some of the best to get you started in just a few seconds.</p>
        </Notes>
        <ButtonSet>
          <a href="https://www.readme-templates.com/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto btn">
            <span>view project</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
