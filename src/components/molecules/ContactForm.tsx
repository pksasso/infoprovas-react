import React from "react";
import { ActionButton } from "../atoms/ActionButton";
import { Dropdown } from "../atoms/Dropdown";
import { TextArea } from "../atoms/TextArea";
import { TextBox } from "../atoms/TextBox";

interface ContactFormProps {
  send: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  subject: string;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

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
}: ContactFormProps) => {

  const sendEmail = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if (isEmail(email) && name.length > 0 && subject.length > 0 && message.length > 0) {
      send();
    } else {
      alert('Preencha todos os campos');
    }
  };

  function isEmail(email: string) {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

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
