import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_xq5bvve";
    const templateId = "template_j3b38x3";
    const userId = "Ji60EQ9I-w4FjU8fu"; //PrivateKey

    if (
      e.target.firstname.value === "" ||
      e.target.lastname.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Create a new object to hold the email data
    let emailData = {
      to_name: "Dhananjay",
      from_name: e.target.firstname.value + " " + e.target.lastname.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    // Use the emailjs.send method to send the email data
    emailjs.send(serviceId, templateId, emailData, userId).then(
      (result) => {
        console.log(result.text);
        alert("Email successfully sent!");
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          required
        />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
