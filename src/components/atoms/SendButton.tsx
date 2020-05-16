import React from "react";

export const SendButton = (handleSend: any) => {
  return (
    <button className="send-button" onClick={() => handleSend}>
      Enviar
    </button>
  );
};
