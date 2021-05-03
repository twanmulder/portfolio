import { useEffect } from "react"
import { useLastFM } from "use-last-fm"
import { Music } from "react-feather"
import FastAverageColor from "fast-average-color"

export default function CurrentlyListening() {
  const lastFM = useLastFM("jengelstengel", "b311316612b05f87eb336f4b8b4065ee")

  useEffect(() => {
    const fac = new FastAverageColor()
    const setBoxShadow = (img) => {
      const size = 80
      const height = img.naturalHeight
      const colorBottom = fac.getColor(img, { top: height - size, height: size })

      img.style.boxShadow = `0px 6px 15px -4px ${colorBottom.hex}80`
    }

    const img = document.querySelector(".song-art")

    // Make sure image is finished loading
    if (lastFM.status === "playing" && img && img.complete) {
      setBoxShadow(img)
    } else if (lastFM.status === "playing" && img && !img.complete) {
      img.addEventListener("load", function () {
        setBoxShadow(img)
      })
    }
  }, [lastFM])

  return (
    <div className="container pt-40">
      <div className="px-8 pb-8 border-2 border-blue-550 rounded-3xl">
        <p className="inline-flex items-center px-4 text-lg font-bold -translate-y-4 bg-white text-blue-550 transform-gpu">
          <Music size={24} className="mr-2" />
          Now listening to
        </p>
        {lastFM.status === "connecting" && (
          <div className="flex items-center">
            <div className="flex items-center justify-center w-20 h-20 text-gray-200 bg-gray-100 rounded song-art">
              <Music size={40} />
            </div>
            <div className="ml-4">
              <p className="h-6 mb-2 text-lg bg-gray-100 w-60 animate-pulse"></p>
              <p className="w-40 h-6 bg-gray-100 animate-pulse"></p>
            </div>
          </div>
        )}
        {lastFM.status === "playing" && (
          <div className="flex items-center">
            <img className="h-20 rounded song-art" src={lastFM.song.art} alt={`Album cover of ${lastFM.song.art} by ${lastFM.song.artist}`} crossOrigin="anonymous" />
            <div className="ml-4">
              <p className="text-lg">{lastFM.song.name}</p>
              <p className="text-gray-500">{lastFM.song.artist}</p>
            </div>
          </div>
        )}
        {lastFM.status === "idle" && (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">Nothing...</h2>
            <p>Do you know a good song I should listen to?</p>
            <a className="px-8 py-2 mt-4 text-sm text-center text-white transition-colors border rounded-full bg-blue-550 border-blue-550 hover:border-blue-700 hover:bg-blue-700" href="https://twitter.com/messages/compose?recipient_id=843572134110740480&text=Hey Twan, you should listen to:" data-screen-name="@toktoktwan" target="_blank" rel="noreferrer noopener">
              let me know!
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
