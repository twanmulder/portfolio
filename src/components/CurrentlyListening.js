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
    <div className="container pt-20">
      <div className="border-2 border-blue-500 rounded-3xl px-8 pb-8">
        <p className="text-blue-500 bg-white px-4 inline-flex items-center text-lg font-bold transform-gpu -translate-y-4">
          <Music size={24} className="mr-2" />
          Now listening to
        </p>
        {lastFM.status === "connecting" && (
          <div className="flex items-center">
            <div className="song-art h-20 w-20 rounded bg-gray-100 text-gray-200 flex items-center justify-center">
              <Music size={40} />
            </div>
            <div className="ml-4">
              <p className="text-lg bg-gray-100 w-60 h-6 mb-2 animate-pulse"></p>
              <p className="bg-gray-100 w-40 h-6 animate-pulse"></p>
            </div>
          </div>
        )}
        {lastFM.status === "playing" && (
          <div className="flex items-center">
            <img className="song-art h-20 rounded" src={lastFM.song.art} alt={`Album cover of ${lastFM.song.art} by ${lastFM.song.artist}`} crossOrigin="anonymous" />
            <div className="ml-4">
              <p className="text-lg">{lastFM.song.name}</p>
              <p className="text-gray-500">{lastFM.song.artist}</p>
            </div>
          </div>
        )}
        {lastFM.status === "idle" && (
          <div className="flex items-center justify-center flex-col">
            <h2 className="font-bold text-xl">Nothing...</h2>
            <p>Do you know a good song I should listen to?</p>
            <a className="mt-4 border border-blue-600 bg-blue-600 text-white text-center rounded-full py-2 px-8 text-sm transition-colors hover:border-blue-700 hover:bg-blue-700" href="https://twitter.com/messages/compose?recipient_id=843572134110740480&text=Hey Twan, you should listen to:" data-screen-name="@toktoktwan">
              let me know!
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
