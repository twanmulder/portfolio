import { TimelineEntry } from "./Entry"
import { Edit2 } from "react-feather"

export function BlogPost({ slug, title, description, timestamp, divider = true }) {
  return (
    <TimelineEntry title="Published new post" tint="green" Icon={Edit2} timestamp={timestamp} divider={divider}>
      <a href={slug} target="_blank" rel="noreferrer" className="px-4 py-3 transition-shadow bg-white rounded-md shadow dark:bg-gray-900 hover:shadow-lg">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <p className="font-semibold">{title}</p>
            <p className="font-normal text-gray-600">{description}</p>
          </div>
        </div>
      </a>
    </TimelineEntry>
  )
}
