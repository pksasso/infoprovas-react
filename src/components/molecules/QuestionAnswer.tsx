import React from 'react'

export default function QuestionAnswer({
  question,
  answer
}: {
  question: JSX.Element;
  answer: JSX.Element
}) {
  return (
    <div className="columns">
      <div className="column">
        <div className="container">
          {question}
        </div>
      </div>
      <div className="column">
        <div className="container">
          {answer}
        </div>
      </div>
    </div>
  )
}
