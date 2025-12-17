import React, { useState } from "react";
import emailjs from "emailjs-com";
import { contact } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus("Please fill out all fields");
      return;
    }

    emailjs
      .send(
        "service_qrab2l9", // Replace with EmailJS service ID
        "template_7f2uk1t", // Replace with EmailJS template ID
        formData,
        "hay2Gpe3qc4tGV1ru" // Replace with EmailJS user ID
      )
      .then(
        (response) => {
          setStatus("Message Sent Successfully to sharvarimore90@gmail.com!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          setStatus("Error sending message! Please try again.");
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle">
            Available for seamless collaboration via email and various social
            media platforms.
            <br />
            Providing frontend and backend solutions to clients worldwide to
            meet unique business needs and drive success.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              className="input"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              className="textarea"
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-lg bg-accent hover:bg-accent-hover"
              type="submit"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-4 text-center text-accent font-normal">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
