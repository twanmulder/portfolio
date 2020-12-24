import { Award, Briefcase, BookOpen, Box, Zap } from "react-feather"
import { BlogPost } from "../BlogPost"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"
import thatsanegg from "../../../assets/thatsanegg.png"

export function Year2020() {
  return (
    <>
      <DateEntry title="2020" />
      <TimelineEntry title="Reached 100k unique reads on my Medium articles" timestamp="Dec 24, 2020" Icon={Award} tint="yellow">
        <Notes>
          <p>After publishing articles for multiple publications, they have been able to gain over 100k unique reads on Medium.</p>
        </Notes>
        <ButtonSet>
          <a href="https://medium.com/@toktoktwan" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto btn">
            <span>view profile</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <BlogPost timelinetitle="Wrote my first article for Daily.JS" timestamp="November 18, 2020" slug="https://medium.com/dailyjs/whats-the-difference-between-event-handlers-addeventlistener-in-js-963431f05c34" title="What’s the difference between Event Handlers & addEventListener in JS?" description="The difference is subtle but essential to know." />
      <TimelineEntry title='Released the "Your Website Sucks" project' timestamp="Nov 15, 2020" Icon={Zap} tint="blue">
        <Notes>
          <p>A personal project where people send me their website/online product and I tell them why it sucks.</p>
        </Notes>
        <ButtonSet>
          <a href="https://www.thatsanegg.com/your-website-sucks?href=twanmulder.com" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto btn">
            <span>view project</span>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <TimelineEntry title={`Published "That's an Egg"`} timestamp="May 19, 2020" Icon={Zap} tint="blue">
        <a target="_blank" rel="noopener noreferrer" href="https://www.thatsanegg.com/?href=twanmulder.com">
          <div className="flex flex-col overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row hover:shadow-lg">
            <div className="flex flex-col justify-start px-3 py-3 space-y-2 md:w-1/2">
              <h5 className="px-2 pt-2 font-bold text-lg">That's an Egg</h5>
              <p className="flex-1 px-2">Released my very own, personal blog called "That's an Egg". Here, I write about web-development focussed on beginner friendly content.</p>
              <span />
              <div className="btn">view blog</div>
            </div>
            <div className="hidden w-full md:w-1/2 md:inline-block">
              <img src={thatsanegg} />
            </div>
          </div>
        </a>
      </TimelineEntry>
      <TimelineEntry title="Expanded to CRO Specialist" timestamp="Jan 1, 2020" Icon={Briefcase} tint="gray">
        <Notes>
          <p>Expanded my work-role to developer & CRO specialist.</p>
        </Notes>
      </TimelineEntry>
    </>
  )
}
