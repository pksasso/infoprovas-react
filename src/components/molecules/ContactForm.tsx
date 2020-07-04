import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ActionButton } from "../atoms/ActionButton";
import { Dropdown } from "../atoms/Dropdown";
import { TextArea } from "../atoms/TextArea";
import { TextBox } from "../atoms/TextBox";

interface ContactFormProps {
  sendEmail: (token: string) => void;
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
  sendEmail,
  name,
  setName,
  email,
  setEmail,
  subject,
  setSubject,
  message,
  setMessage,
}: ContactFormProps) => {
  const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA || "";
  const recaptchaRef = React.createRef<any>();

  const validateAndSend = (token: string) => {
    if (email && name.length > 0 && subject.length > 0 && message.length > 0) {
      sendEmail(token);
    } else {
      alert("Preencha todos os campos");
    }
  };

  const onSubmitWithReCAPTCHA = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    validateAndSend(token);
  };

  return (
    <div className=" column is-offset-1 is-10">
      <form onSubmit={(e) => onSubmitWithReCAPTCHA(e)}>
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
          <ActionButton title="Enviar" type={"submit"} />
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={RECAPTCHA_KEY}
        />
      </form>
    </div>
  );
};
