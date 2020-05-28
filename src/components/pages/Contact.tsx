import React, { useState } from "react";
import InfoProvasService from "../../services/app";
import { ContactForm } from "../molecules/ContactForm";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const { postContact } = InfoProvasService;
    postContact({ name, email, subject, message });
  };

  return (
    <div className="columns container is-fluid">
      <div className="column is-offset-2 is-8 panel has-background-white">
        <h1 className="title columns column is-12 is-centered">Contato</h1>
        <ContactForm
          send={sendEmail}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          subject={subject}
          setSubject={setSubject}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};
