import { Twitter } from "react-feather"
import { BlogPost } from "../BlogPost"
import { ButtonSet, DateEntry, Notes, TimelineEntry } from "../Entry"

export function December() {
  return (
    <>
      <DateEntry title="December, 2020" />
      <TimelineEntry title="Twitter conversation" timestamp="Decemer 22, 2020" Icon={Twitter} tint="blue">
        <Notes>
          <blockquote>Just turned on my out-of-office, the official moment of starting my 2,5 weeks off Christmas 🎄🎉🥳</blockquote>
        </Notes>
        <ButtonSet>
          <a href="https://twitter.com/toktoktwan/status/1341446093259849729" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <button className="w-full md:w-auto btn">
              <span>View tweet</span>
            </button>
          </a>
        </ButtonSet>
      </TimelineEntry>
      <BlogPost timestamp="December 18, 2020" slug="https://www.thatsanegg.com/blog/create-your-own-dark-mode-using-js-css-variables-and-localstorage/" title="Create your own Dark Mode using JS, CSS Variables, and localStorage" description="Get your own dark mode up and running in just a few minutes!" />
      <BlogPost timestamp="December 6, 2020" slug="https://www.thatsanegg.com/blog/your-super-simple-intro-to-css-variables/" title="Your super-simple intro to CSS Variables" description="In this article, I'll go through why you should know what CSS Variables are and how you can use them to level-up your CSS skills as a developer." />
    </>
  )
}
