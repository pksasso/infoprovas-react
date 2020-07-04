import React, { useState } from "react";
import InfoProvasService from "../../services/app";
import { Loader } from "../atoms/Loader";
import { ContactForm } from "../molecules/ContactForm";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (token: string) => {
    const { postContact } = InfoProvasService;
    setIsLoading(true);
    try {
      const response = await postContact({
        name,
        email,
        subject,
        message,
        captcha: token,
      });
      setIsLoading(false);
      if (
        response.status === 200 &&
        response.data.success === "Message submitted"
      ) {
        alert("Mensagem enviada !!!");
        clearFields();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
  };

  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-offset-2 is-8 panel has-background-white">
          <h1 className="title columns column is-12 is-centered">Contato</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <ContactForm
              sendEmail={sendEmail}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              subject={subject}
              setSubject={setSubject}
              message={message}
              setMessage={setMessage}
            />
          )}
        </div>
      </div>
    </div>
  );
};
