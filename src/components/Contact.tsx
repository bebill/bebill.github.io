import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Background from "./Background";

const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  color: #9b773d;
  margin-bottom: 2rem;
`;

const Note = styled.p`
  font-style: italic;
  color: #646263;
  margin-bottom: 1.5rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  background-color: #444243;
  color: #fffbeb;
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  resize: vertical;
  background-color: #444243;
  color: #fffbeb;
`;

const SubmitButton = styled.button`
  background-color: #9b773d;
  padding: 1rem 2rem;
  color: #fffbeb;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #7b622c;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mapping form data to match template variable names
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_7dck6s1",
        "template_97vecjg",
        templateParams,
        "PkZH1zOUEDms6PRoR"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <ContactWrapper>
      <Background />
      <ContactTitle>Contact Me</ContactTitle>
      <Note>
        I speak both French and English, feel free to reach out in either
        language.
      </Note>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Please include any details that might help: project scope, timeline, budget, or any other important information."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
