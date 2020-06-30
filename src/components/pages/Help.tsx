import React from "react";
import { questions } from "../../constants/questions";
import QuestionAnswer from "../molecules/QuestionAnswer";

export const HelpPage = () => {
  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-offset-2 is-8 panel has-background-white">
          <h1 className="title columns column is-12 is-centered">Ajuda</h1>
          {questions.map((question, index) => {
            return (
              <QuestionAnswer
                key={index}
                question={question.question}
                answer={question.answer}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
