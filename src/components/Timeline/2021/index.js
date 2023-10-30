import { Zap, Briefcase } from "react-feather"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2021() {
  return (
    <>
      <DateEntry title="2021" />
      <TimelineEntry title="Started as Frontend Developer at De Bijenkorf!" timestamp="December 1st, 2021" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>As part of Central Group & Signa, De Bijenkorf is one of the largest luxury e-commerce platforms in the Netherlands.</p>
          <p>As as Frontend Developer in one of the most crucial teams of the company - Checkout, I am responsible for making sure that the customer payment journey is smooth, intuitive, and flawless. Serving more than a million unique visitors each month, a frictionless checkout flow is essential. Some of the technologies we use are: React, TypeScript, Redux, Jest, Playwright, React Testing Library, SCSS.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.debijenkorf.nl/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <TimelineEntry title="Started as Technical Product Specialist at Framer!" timestamp="April 5, 2021" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Framer is a digital design tool that allows user to publish their design as a website with a single button push.</p>
          <p>As part of the Customer Success team, I worked as a Technical Product Specialist to integrate this tool into enterprise customer's existing workflow. I lead workshops, did technical demo's, helped users out 1-on-1, and created custom code solutions for them to make their integration and workflow as smooth, useful, and joyful as possible.</p>
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
