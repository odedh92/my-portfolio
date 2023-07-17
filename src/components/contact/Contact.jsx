import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md"; 
import { ImWhatsapp } from "react-icons/im"; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_80b0zf8', 'template_a6a43nu', form.current, 'DeOm_w2xXCL82nG26')
    alert('Message sent')
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>odedh92@gmail.com</h5>
            <a href="mailto:odedh92@gmail.com" target="_blank" rel="noreferrer">Send a email</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+972528266810</h5>
            <a href="https://wa.me/+972528266810" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="You Email" required />
          <textarea name="message" id="" placeholder="Your Message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
