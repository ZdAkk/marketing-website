import { useState } from "react";
import contactImage from "../assets/contact.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  function submitForm(e) {
    e.preventDefault();
    console.log("Form Submited!");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((oldState) => {
      return {
        ...oldState,
        [name]: value,
      };
    });
  }

  return (
    <div className="main-grid contact">
      <h1 className="page-title">Contact</h1>
      <p className="subtitle">
        Contact. Let us know how we can help you need and we’ll drive over to
        your place in our Bluesmobile the following day to discuss the deal.
      </p>
      <img src={contactImage} alt="Mail boxes" className="main-image" />
      <div className="main-text">
        <h2 className="section-title">Getting in touch with us</h2>
        <p>
          You can either use the form or{" "}
          <a href="mailto:recipient@example.com" className="email-link">
            send us an email.
          </a>{" "}
          I&apos;ll get back in touch with you as soon as possible!
        </p>
      </div>
      <form className="contact-form">
        <label htmlFor="first-name" className="firstName-label">
          First Name
          <input
            type="text"
            id="first-name"
            name="firstName"
            className="form-input firstName-input"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email" className="email-label">
          Email
          <input
            type="email"
            id="email"
            name="email"
            className="form-input email-input"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message" className="message-label">
          Message
          <textarea
            type="text"
            id="message"
            name="message"
            className="message-input"
            rows="8"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit" onClick={submitForm} className="form-button">
          send
        </button>
      </form>
    </div>
  );
}
