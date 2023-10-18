import { Zap, Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2021() {
  return (
    <>
      <DateEntry title="2021" />
      <TimelineEntry title="Third job!" timestamp="December 1st, 2021" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Started working at De Bijenkorf as a Frontend Developer.</p>
          <p>As part of Central Group & Signa, De Bijenkorf is one of the largest luxury e-commerce platforms in the Netherlands.</p>
          <p>As as Frontend Developer in one of the most crucial teams of the company - Checkout, I am responsible for making sure that the customer payment journey is smooth, intuitive, and flawless. Serving more than a million unique visitors each month, a frictionless checkout flow is essential. Some of the technologies we use are: React, TypeScript, Redux, Jest, Playwright, React Testing Library, SCSS.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.debijenkorf.nl/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <TimelineEntry title="Second job!" timestamp="April 5, 2021" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Started working at Framer as a Technical Product Specialist.</p>
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
