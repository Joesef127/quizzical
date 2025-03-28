import { Link } from 'react-router-dom';

export default function Intro() {

  return (
    <div className="intro-wrapper">
      <div className="yellow-blob"></div>
      <div className="blue-blob"></div>

      <div className="intro-container">
        <h1 className="intro-heading">Quizzical</h1>
        <p className="intro-text">Take random exciting quizes!</p>
        <button className="intro-btn">
          <Link to={'/quiz'} className="intro-link">
            Start quiz
          </Link>
        </button>
      </div>
    </div>
  );
}
