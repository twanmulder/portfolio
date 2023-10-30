import { Briefcase } from "react-feather"
import { BlogPost } from "../BlogPost"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2019() {
  return (
    <>
      <DateEntry title="2019" />
      {/* <TimelineEntry title="Acquired by Accenture Interactive" timestamp="October 1, 2019" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Storm Digital is officially acquired by Accenture Interactive on the 1st of October.</p>
        </Notes>
      </TimelineEntry> */}
      <BlogPost timelinetitle="Wrote my first article for Prototypr.io" timestamp="August 23, 2019" slug="https://blog.prototypr.io/animating-text-like-sketch-does-using-only-css-bed0e4c0cf95" title="Animating text like Sketch does using only CSS" description="Using CSS to create a beautiful staggering text animation." />
      <TimelineEntry title="First job as Frontend Developer!" timestamp="April 1, 2019" Icon={Briefcase} tint="indigo">
        <Notes>
          <p>Started my first job as a Frontend Developer at a digital marketing agency called Storm Digital.</p>
          <p>Responsible for creating dynamic, interactive, and animated display creatives using modern technologies such as HTML, CSS, JavaScript, Vue, React, and GSAP. Communicated between stakeholders, designers, and clients to create a fitting end result.</p>
        </Notes>
        <ButtonSet>
          <a className="w-full md:w-auto btn" href="https://www.stormdigital.nl/" target="_blank" rel="noopener noreferrer">
            <span>view website</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
