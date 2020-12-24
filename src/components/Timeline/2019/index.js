import { Briefcase } from "react-feather"
import { BlogPost } from "../BlogPost"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function Year2019() {
  return (
    <>
      <DateEntry title="2019" />
      <TimelineEntry title="Acquired by Accenture Interactive" timestamp="October 1, 2019" Icon={Briefcase} tint="gray">
        <Notes>
          <p>Storm Digital is officially acquired by Accenture Interactive on the 1st of October.</p>
        </Notes>
      </TimelineEntry>
      <BlogPost timelinetitle="Wrote my first article for Prototypr.io" timestamp="August 23, 2019" slug="https://blog.prototypr.io/animating-text-like-sketch-does-using-only-css-bed0e4c0cf95" title="Animating text like Sketch does using only CSS" description="Using CSS to create a beautiful staggering text animation." />
      <TimelineEntry title="First job!" timestamp="April 1, 2019" Icon={Briefcase} tint="gray">
        <Notes>
          <p>Started my first job as a Creative Developer at a digital marketing agency called Storm Digital.</p>
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
