import twan from "../assets/large_twan_transparent.png"

export default function Book() {
  return (
    <>
      <header style={{ background: "linear-gradient(45deg, #FF7B00, #FFC300)" }} className="pt-12">
        <section className="flex items-center justify-between max-w-4xl px-4 mx-auto">
          <div>
            <h1 className="font-black text-white text-7xl">
              <span>Your</span>
              <br />
              <span>Website</span>
              <br />
              <span>Sucks</span>
            </h1>
            <h2 className="mt-2 text-3xl text-white uppercase opacity-75">And I'll help you fix it</h2>
          </div>
          <img width="448px" height="448px" src={twan} alt="" className="max-w-md" />
        </section>
      </header>
      <main className="flex">
        <section className="z-10 max-w-4xl p-12 mx-auto -mt-8 prose bg-white shadow-2xl rounded-3xl">
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
          {/* <script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe id="testimonialto-your-website-sucks-light" src="https://embed.testimonial.to/w/your-website-sucks?theme=light&card=base" frameborder="0" scrolling="no" width="100%"></iframe>
<script type="text/javascript">iFrameResize({log: false, checkOrigin: false}, "#testimonialto-your-website-sucks-light");</script> */}
          <p>
            Not convinced just yet? <strong>Read a sample chapter before committing</strong>
          </p>
          <a id="checkout-button" href="https://flurly.com/p/your-website-sucks">
            <img src="https://flurly.com/buy-now.svg" style={{ height: "3em", backgroundColor: "white" }} alt="" />
          </a>
        </section>
      </main>
    </>
  )
}
