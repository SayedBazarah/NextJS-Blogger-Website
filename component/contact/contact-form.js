import { useRef } from "react";
import Style from "./contact-form.module.css";

function ContactForm() {
  //Ref for each form item
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  //Handle form, Sending data to API
  const formHandle = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <section className={Style.contact}>
      <h2>How can I help you?</h2>
      <form className={Style.form}>
        <div className={Style.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={Style.control}>
          <label htmlFor="name">Your Name</label>
          <input ref={nameRef} type="text" id="name" required />
        </div>
        <div className={Style.control}>
          <label htmlFor="message">Your Message</label>
          <textarea ref={messageRef} id="message" rows="5" />
        </div>
        <div className={Style.actions}>
          <button onClick={formHandle}>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
