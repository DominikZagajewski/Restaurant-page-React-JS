import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <textarea placeholder="Your Massage"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
export default Contact;
