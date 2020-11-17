import React from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_uza6378",
        e.target,
        "user_pEL1wgb9Lwrd8djPkrtqI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contactContainer">
      <form className="contactForm" onSubmit={sendEmail}>
        <div className="contactDetails">
          Send me a message!
          <label htmlFor="name">
            Full Name
            <input
              data-testid="name"
              type="text"
              name="name"
              className="formInputName"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              data-testid="email"
              type="text"
              name="email"
              className="formInputEmail"
            />
          </label>
          <label htmlFor="subject">
            Subject
            <input
              type="text"
              data-testid="subject"
              name="subject"
              className="formInputSubject"
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              type="textarea"
              data-testid="message"
              name="message"
              className="textarea"
            ></textarea>
          </label>
        </div>
        <div className="buttonContainer">
          <button
            type="submit"
            data-testid="submitButton"
            className="submitButtonForm"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
