import aboutMeImage from "../assets/about-me.jpg";

export default function About() {
  return (
    <div className="main-grid about-me">
      <h1 className="page-title">About us.</h1>
      <p className="subtitle">
        We’re two brothers from Chicago. We can help you with SEO, SEM, content
        marketing and whatever else.
      </p>
      <img
        className="main-image"
        src={aboutMeImage}
        alt="Guy wearing underwater goggles"
      ></img>
      <div className="main-text">
        <h2 className="section-title">I&apos;m a really great guy</h2>
        <p>
          We grew up in downtown Chicago, and we used to play in a band. Jake
          loves fried chicken, and Elwood loves dry white toast.
        </p>
        <p>
          While the band didn&apos;t make it, the hard work we put in trying to
          promote it sure did. Like a lot of people, we needed a website, and we
          needed to rank. The &quot;experts&quot; didn&apos;t seem to know what
          they were talking about, so we figured it out on our own.
        </p>
        <h2 className="section-title">I can do all sorts of great stuff</h2>
        <p>
          Honestly most people in this industry seem to be full of crap. We
          don&apos;t care what you&apos;ve heard, or what others have told you,
          we get results and at the end of the day, what else matters?
        </p>
        <p>
          So sure, maybe we&apos;re a bit different from what you&apos;d expect,
          but if you want to rank, market, and build your way to the top,
          we&apos;re the brothers for you.
        </p>
      </div>
    </div>
  );
}
