import { Link } from "react-router-dom";

export default function Home() {
  const cardInfo = [
    {
      title: "About Us",
      description:
        "We grew up in downtown Chicago, and we used to play in a band. Jake loves fried chicken, and Elwood loves dry white toast.",
    },
    {
      title: "Our skills",
      description:
        "Elwood is an expert in SEO, SEM, and driving from the police. Jake is our social media specialist, and he has an amazing voice.",
    },
    {
      title: "Get in touch",
      description:
        "Send us an email with some info about what help you need and we’ll drive over to your place in our Bluesmobile the following day to discuss the deal.",
    },
  ];

  const cardInfoElements = cardInfo.map((card, index) => {
    return (
      <section className="card" key={index}>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </section>
    );
  });

  return (
    <>
      <section className="hero main-grid">
        <h1 className="hero-title">
          The only marketing agency on a{" "}
          <span className="accent-text">mission from God</span>, fully dedicated
          to increase your web traffic.
        </h1>
        <p>
          We’re two brothers from Chicago that are trying to pay back our debt.
          We can help you with <strong>SEO, SEM content marketing</strong> and
          whatever else.
        </p>
        <Link className="btn btn-accent" to="/contact">
          contact us
        </Link>
      </section>
      <div className="card-container main-grid">{cardInfoElements}</div>
    </>
  );
}
