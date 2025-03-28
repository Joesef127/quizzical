import { useState } from 'react';

export default function Question({
  id,
  question,
  answers,
  correctAnswer,
  selectedAnswer,
  isChecked,
  handleSelectAnswers,
}) {
  return (
    <div className="question-box">
      <div className='question-div'>
      <span>{id + 1}.</span>
      <h3 className="question">{question}</h3>
      </div>
      <ul className="answer-list">
        {answers.map((answer, index) => {
          let className = 'answer';

          if (isChecked) {
            if (answer === correctAnswer) {
              className += ' correct';
            } else if (answer === selectedAnswer) {
              className += ' wrong';
            }
          } else if (answer === selectedAnswer) {
            className += ' selected';
          }



          return (
            <li key={index} className={className}>
              <a
                href="#"
               
                onClick={(e) => {
                  e.preventDefault();
                    handleSelectAnswers(answer);
                }}
              >
                {answer}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
