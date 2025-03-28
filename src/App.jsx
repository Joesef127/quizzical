import { useEffect, useState } from 'react';
import './App.css';
import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [quizes, setQuizes] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    getQuiz();
  }, []);

  async function getQuiz() {
    try {
      const quizData = await fetch('https://the-trivia-api.com/v2/questions');
      const response = await quizData.json();
      setQuizes(response);
    } catch (error) {
      console.error('error fetching quiz data', error);
    }
  }

  useEffect(() => {
    if (quizes.length > 0) {
      const questionArray = quizes.map((quiz) => {
        return quiz.question.text;
      });
      const answerArray = quizes.map((quiz) => {
        const allAnswers = [...quiz.incorrectAnswers, quiz.correctAnswer];
        allAnswers.sort(() => Math.random() - 0.5);
        return allAnswers;
      });

      setQuestions(questionArray);
      setAnswers(answerArray);
    }
  }, [quizes]);

  console.log('questions array: ', questions);
  console.log('answers array: ', answers);

  function handleSelectAnswers(questionIndex, selectedAnswer) {
    setSelectedAnswers((prevAnswer) => ({
      ...prevAnswer,
      [questionIndex]: selectedAnswer,
    }));
  }

  function handleCheckAnswers() {
    setIsChecked(true);

    let rightAnswer = 0;
    quizes.forEach((quiz, index) => {
      if (selectedAnswers[index] === quiz.correctAnswer) {
        rightAnswer++;
      }
    });

    setScore(rightAnswer);
  }

  function handleRestartQuiz() {
    setIsChecked(false);
    setSelectedAnswers({});
    setScore(null);
    getQuiz();
  }

  return (
    <div className="wrapper">
      <div className="yellow-blob"></div>
      <div className="blue-blob"></div>

      <div className="quiz-list">
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question}
            answers={answers[index] || []}
            correctAnswer={quizes[index]?.correctAnswer || ''}
            selectedAnswer={selectedAnswers[index] || null}
            handleSelectAnswers={(answer) => handleSelectAnswers(index, answer)}
            isChecked={isChecked}
            id={index}
          />
        ))}
      </div>

      <div className="footer">
        {isChecked ? (
          <p className="score-report">
            You scored {score}/{quizes.length}. {score < 5 ? "You failed. try harder!" : "You passed. Keep it up!"}
          </p>
        ) : null}
        <div className="btn-div">
          <button className="submit-btn" onClick={handleCheckAnswers}>
            Check Answers
          </button>
          <button className="submit-btn" onClick={handleRestartQuiz}>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
