import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles.css";
import NameApi from "../context/NameApi";
import QuestionsApi from "../context/QuestionsApi";
import CurrentQuesCountApi from "../context/CurrentQuesCountApi";
import TrueAnswersApi from "../context/TrueAnswersApi";

const Result = () => {
  const { name, setName } = useContext(NameApi);
  const { questions, setQuestions } = useContext(QuestionsApi);
  const { setCount } = useContext(CurrentQuesCountApi);
  const { trueAnswers, setTrueAnswers } = useContext(TrueAnswersApi);

  let history = useHistory();

  useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
  }, []);

  const handleStartingOver = () => {
    setName("");
    setQuestions([]);
    setCount(0);
    setTrueAnswers(0);
    history.push("/");
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Congratz you just finished the MCQ Quiz Successfully</h1>
        <p>You will get your result now!</p>
      </div>
      <div className="container text-center">
        <h2>
          {name}, You Answered {trueAnswers} out of 5 Questions correctly
        </h2>
        <button onClick={handleStartingOver} className="btn btn-danger mt-5">
          Start The MCQ Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Result;
