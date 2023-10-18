function getTint(color) {
  switch (color) {
    case "red":
      return "text-red-800 bg-red-500 bg-opacity-20"
    case "blue":
      return "text-blue-800 bg-blue-500 bg-opacity-20"
    case "green":
      return "text-green-800 bg-green-500 bg-opacity-20"
    case "purple":
      return "text-purple-800 bg-purple-500 bg-opacity-20"
    case "indigo":
      return "text-indigo-800 bg-indigo-500 bg-opacity-20"
    case "pink":
      return "text-pink-800 bg-pink-500 bg-opacity-20"
    case "yellow":
      return "text-yellow-800 bg-yellow-500 bg-opacity-20"
    case "gray":
    default:
      return "text-primary bg-gray-200"
  }
}

export function Notes({ children }) {
  return <div className="-mt-2 prose timeline-inset prose-md">{children}</div>
}

export function ButtonSet({ children }) {
  return <div className="flex flex-wrap space-y-3 md:space-y-0 md:space-x-3 timeline-inset ">{children}</div>
}

export function TimelineEntry({ children = null, title, timestamp, Icon, tint = "gray", divider = true }) {
  return (
    <div className="flex mb-20 timeline-item">
      {/* Icon and dividing line */}
      <div className="flex flex-col items-center">
        <div className={`flex justify-center p-3 rounded-full align-center border-4 border-white ${getTint(tint)}`}>
          <Icon size={16} />
        </div>
        {divider && <div className="flex-1 w-px -mb-12 bg-gray-200 md:-mb-20 timeline-stroke" />}
      </div>

      <div className="flex flex-col flex-1 ml-4 space-y-4">
        <div className="flex flex-col pt-1 contents-center">
          <h3 className="font-bold text-lg">{title}</h3>
          {timestamp && <span className="text-sm text-gray-600">{timestamp}</span>}
        </div>
        <div className="flex flex-col space-y-4 timeline-full-width">{children}</div>
      </div>
    </div>
  )
}

export function DateEntry({ title }) {
  return (
    <div className="flex items-center mb-8 timeline-item">
      <div className="w-12 mr-4 bg-gray-200 flex-0 timeline-stroke" />
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="flex-1 h-px ml-4 bg-gray-200 timeline-stroke" />
    </div>
  )
}
