import { GitHub, Twitter, Linkedin } from "react-feather"

export default function Footer() {
  return (
    <footer className="text-gray-700 bg-white" id="socials">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl font-bold">Twan Mulder</span>
        </p>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 —
          <a className="text-gray-600 ml-1" href="https://twitter.com/toktoktwan" rel="noopener noreferrer" target="_blank">
            @toktoktwan
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500" href="https://github.com/twanmulder" rel="noopener noreferrer" target="_blank">
            <GitHub size={16} />
            <span className="sr-only">Go to GitHub profile</span>
          </a>
          <a className="ml-3 text-gray-500" href="https://twitter.com/toktoktwan" rel="noopener noreferrer" target="_blank">
            <Twitter size={16} />
            <span className="sr-only">Go to Twitter profile</span>
          </a>
          <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/twanmulder/" rel="noopener noreferrer" target="_blank">
            <Linkedin size={16} />
            <span className="sr-only">Go to LinkedIn profile</span>
          </a>
        </span>
      </div>
    </footer>
  )
}
