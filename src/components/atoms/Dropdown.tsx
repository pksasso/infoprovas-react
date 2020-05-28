import React from "react";

export const Dropdown = ({ setSelected }: { setSelected: any }) => {
  const selected = (option: String) => {
    setSelected(option);
  };

  return (
    <div className="field ">
      <label className="label ">
        Assunto
        <div>
          <p className="control has-icons-left">
            <span className="select">
              <select
                onChange={(event) => {
                  selected(event.target.value);
                }}
              >
                <option>Selecione</option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão</option>
                <option value="reportar-erro">Reportar erro</option>
                <option value="denuncia">Denúncia</option>
                <option value="outros">Outros</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-globe"></i>
            </span>
          </p>
        </div>
      </label>
    </div>
  );
};
