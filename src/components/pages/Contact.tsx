import React, { useState } from "react";
import InfoProvasService from "../../services/app";
import { Loader } from '../atoms/Loader';
import { ContactForm } from "../molecules/ContactForm";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async () => {
    const { postContact } = InfoProvasService;

    setIsLoading(true);

    await postContact({ name, email, subject, message }).then((res) => {
      setIsLoading(false);
      if (res.status === 200 && res.data.success === "Message submitted") {
        alert('Mensagem enviada !!!');
        clearFields();
      }
    })
  };

  const clearFields = () => {
    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
  }

  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-offset-2 is-8 panel has-background-white">
          <h1 className="title columns column is-12 is-centered">Contato</h1>
          {
            isLoading
              ?
              <Loader />
              :
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
          }
        </div>
      </div>
    </div>
  );
};
