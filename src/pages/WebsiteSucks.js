import { useEffect } from "react"
import { Helmet } from "react-helmet"

import Book from "../components/Book"
import Footer from "../components/Footer"

import Twan from "../assets/twan_transparent.png"
import ButtonAccent from "../assets/ButtonAccent"

import { Star, Twitter } from "react-feather"

const waitForIFrameResize = () => {
  if (!window.iFrameResize) {
    return setTimeout(waitForIFrameResize, 50)
  }

  window.iFrameResize({ log: false, checkOrigin: false }, "#testimonialto-your-website-sucks-light")
}

export default function WebsiteSucks() {
  useEffect(() => {
    waitForIFrameResize()
  }, [])

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Your Website Sucks" />
        <meta property="og:description" content="Learn the 5 pillars of creating a website that gets you from visitors, to conversions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.twanmulder.com/meta-book.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@toktoktwan" />
        <meta name="twitter:creator" content="Twan Mulder" />
        <meta name="twitter:title" content="Your Website Sucks" />
        <meta name="twitter:description" content="Learn the 5 pillars of creating a website that gets you from visitors, to conversions." />
        <meta name="twitter:image" content="https://www.twanmulder.com/social-book.png" />
      </Helmet>
      <header style={{ background: "linear-gradient(45deg, #FF7B00, #FFC300)" }} className="pt-40 pb-16">
        <nav></nav>
        <section className="flex items-center justify-between max-w-4xl px-12 mx-auto">
          <div>
            <h1 className="text-5xl font-black text-white md:text-7xl">
              Your
              <br />
              Website
              <br />
              Sucks
            </h1>
            <h2 className="mt-2 text-xl tracking-widest text-white uppercase opacity-75 md:text-3xl">And I'll help you fix it</h2>
            <div className="mt-8">
              <div className="relative block mr-6 md:inline-block">
                <a className="inline-block w-full px-6 py-3 text-xl font-bold text-center transition bg-white rounded-lg md:w-auto hover:opacity-90 transform-gpu hover:-translate-y-1" href="https://flurly.com/p/your-website-sucks">
                  Buy the Book
                </a>
                <ButtonAccent />
              </div>
              <a className="inline-block mt-4 text-sm text-white transition hover:opacity-75 md:mt-0 md:text-base" href="./your-website-sucks-sample.pdf" download>
                or get a chapter for free
              </a>
            </div>
          </div>
          <Book />
        </section>
        <section className="grid max-w-4xl grid-rows-3 gap-4 px-12 pt-32 mx-auto md:gap-0 md:grid-cols-3">
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"Great & straight-to-the-point!"</p>
          </article>
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"100% recommendation!"</p>
          </article>
          <article className="flex flex-col items-center text-center text-white">
            <div className="flex gap-1">
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
              <Star fill="#fff" size={16} />
            </div>
            <p className="mt-1 text-sm opacity-75">"Concise with great examples!"</p>
          </article>
        </section>
      </header>
      <main className="pb-32">
        <section className="z-10 max-w-4xl p-8 mx-auto -mt-6 bg-white shadow-2xl md:-mt-16 md:p-12 rounded-3xl">
          <div className="prose max-w-none">
            <p className="text-center">
              <strong>Learn the 5 pillars of creating a website that gets you from visitors, to conversions.</strong>
            </p>
            <h2>Hey, your website sucks!</h2>
            <p>A pretty bold statement. One I firmly believe in and stand by.</p>
            <p>At the time of writing, there are over 2 billion websites on the internet. 400 million of those are active. </p>
            <p>
              And I'm sure that{" "}
              <strong>
                <em>all of them suck</em>
              </strong>
              .
            </p>
            <p>Working as a Developer and CRO Specialist for companies like Accenture and marketing agencies, I have a lot of experience creating and/or reviewing websites for clients like Audi, Virgin Media, and Porsche.</p>
            <p>Even though there's an amazing amount of great working, good looking websites out there, not one of them is perfect.</p>
            <p>That's why I'd love to help you improve yours!</p>
            <p>In this e-book, we'll go through 5 different pillars of creating a website that gets you the results you want.</p>
            <p>
              There are still a{" "}
              <strong>
                <em>ton</em>
              </strong>{" "}
              of different things you can work on to improve your website, but these 5 ones are the ones I've found had the most long-term impact.
            </p>
            <h2>Chapters</h2>
            <ol>
              <li>
                <strong>Target Audience</strong>
              </li>
              <li>
                <strong>Value Proposition</strong>
              </li>
              <li>
                <strong>SEO</strong>
              </li>
              <li>
                <strong>Design &amp; Layout</strong>
              </li>
              <li>
                <strong>Page Speed</strong>
              </li>
            </ol>
            <h2>Who is this book for?</h2>
            <p>If you're currently not getting the results you want from your own website and want to understand the core reasons of why that is, this book is for you! </p>
            <p>It doesn't matter if you're a Designer, Developer, SaaS Founder, or anything else. As long as you want to make a positive change on the impact your website has, it'll be a great match!</p>
            <h2>Refund Policy</h2>
            <p>If you're not 100% satisfied with the purchase, or it's not what you were expecting, just reply to the download email within 30 days, and you'll get a full refund. No questions asked.</p>
            <iframe title="Testimonials" id="testimonialto-your-website-sucks-light" src="https://embed.testimonial.to/w/your-website-sucks?theme=light&card=base" frameBorder="0" scrolling="no" width="100%"></iframe>
            <p>
              Not convinced just yet?&nbsp;
              <a className="font-bold transition hover:opacity-75" href="./your-website-sucks-sample.pdf" download>
                Read a sample chapter before committing
              </a>
            </p>
          </div>
          <a style={{ background: "linear-gradient(45deg, #FF7B00, #FFC300)" }} className="block w-full px-6 py-3 mt-8 text-xl font-bold text-center text-white no-underline transition rounded-lg shadow-lg md:inline-block bg-blue-550 md:w-auto hover:opacity-90 transform-gpu hover:-translate-y-1" href="https://flurly.com/p/your-website-sucks">
            Buy the Book
          </a>
        </section>
        <section className="mt-16">
          <img className="max-w-xs mx-auto md:max-w-sm" src={Twan} alt="" />
          <article style={{ background: "linear-gradient(45deg, #FF7B00, #FFC300)" }} className="flex flex-col justify-between max-w-4xl p-8 mx-auto text-white shadow-2xl md:items-center md:p-12 rounded-3xl bg-blue-550 md:flex-row">
            <div className="max-w-lg">
              <p className="mb-8 text-5xl font-bold">
                Turn Visitors,
                <br /> Into Customers
              </p>
              <p>Get a personalized 20min. breakdown of your website.</p>
              <p>Learn where your users get stuck and increase your MMR without spending thousands of dollars.</p>
            </div>
            <div className="mt-8 md:mt-0">
              <a className="inline-flex items-center justify-center w-full px-6 py-3 mb-4 text-xl font-bold text-center text-black transition bg-white rounded-lg md:justify-start md:w-auto hover:opacity-90 transform-gpu hover:-translate-y-1" href="https://twitter.com/messages/compose?recipient_id=843572134110740480&text=Hey%20Twan,%20tell%20me%20more%20about%20the%20personalised%20breakdown%20you%20offer" target="_blank" rel="noreferrer noopener">
                <Twitter size={20} />
                <span className="ml-2">Get in Touch</span>
              </a>
              <p>
                Prefer email?
                <br />
                You can reach out to me
                <br />
                at twan.mulder@gmail.com
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
