import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import { Dropdown } from "../atoms/Dropdown";
import { TextArea } from "../atoms/TextArea";
import { TextBox } from "../atoms/TextBox";

export const ContactForm = ({
  send,
  name,
  setName,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
}: {
  send: any;
  name: string;
  setName: any;
  email: string;
  setEmail: any;
  subject: string;
  setSubject: any;
  message: string;
  setMessage: any;
}) => {
  const sendEmail = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    send();
  };

  return (
    <div className=" column is-offset-1 is-10">
      <form onSubmit={(e) => sendEmail(e)}>
        <TextBox name="Nome" value={name} setText={setName} maxLength={255} />
        <TextBox
          name="Email"
          value={email}
          setText={setEmail}
          maxLength={255}
        />
        <Dropdown setSelected={setSubject} />
        <TextArea
          label="Mensagem"
          placeholder="Descreva aqui seu problema"
          maxLength={5000}
          value={message}
          setMessage={setMessage}
        />
        <div className="columns column is-12 is-centered">
          <ActionButton title="Enviar" onClick={sendEmail} />
        </div>
      </form>
    </div>
  );
};
