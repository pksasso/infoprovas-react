import React, { useState } from "react";
import { SendButton } from "../atoms/SendButton";
import { TextBox } from "../atoms/TextBox";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event: any) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);
  };

  return (
    <form onSubmit={(e) => sendEmail(e)}>
      <TextBox name="nome" value={name} setText={setName} />
      <TextBox name="Email" value={email} setText={setEmail} />
      <TextBox name="Assunto" value={subject} setText={setSubject} />
      <TextBox name="Mensagem" value={message} setText={setMessage} />
      <SendButton />
    </form>
  );
};
