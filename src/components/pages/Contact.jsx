import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const PUBLIC_KEY = "gLOBgQUxKufsIJGPU";
  const SERVICE_ID = "service_eww0lvp";
  const TEMPLATE_ID = "template_v8f5vum";

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Try again later.");
      });
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Contact</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={6} name="message" required />
        </Form.Group>

        <Button type="submit" variant="primary">Send Message</Button>
      </Form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
