import React, { useRef } from 'react';
import Glitch from '../components/Glitch';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_up8vuph', 'template_x5eixvd', form.current, 'clEheOSq3LSZq6f2Q')
      .then(
        (result) => {
          form.current.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => toast('Message sent successfully');

  return (
    <>
      <div className="hero">
        <motion.main
          className="about-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Glitch>Contact Page</Glitch>
          <form className="contact" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="from_email" required />
            <label>Message</label>
            <textarea className="message" name="message" required />
            <input className="btn" type="submit" value="Send" />
          </form>
        </motion.main>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contact;
