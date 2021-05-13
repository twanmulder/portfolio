import "./Book.css"
import bookcover from "../assets/book.png"

export default function Book() {
  return (
    <a href="https://flurly.com/p/your-website-sucks" className="hidden md:inline">
      <div className="flex items-center justify-center book-container">
        <div className="book">
          <img alt="" src={bookcover} />
        </div>
      </div>
    </a>
  )
}
